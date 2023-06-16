import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import kratos, { getSelfServiceUrl } from '$lib/kratos';
import { handleSoftErrorWithRedirect } from '../utils';

export const load = (async ({ url, request }) => {
	const searchParams = url.searchParams;
	const flowId = searchParams.get('flow');

	if (flowId === null) {
		console.debug('No flow ID found in URL query initalizing login flow', url.searchParams);
		throw redirect(303, getSelfServiceUrl('login'));
	}

	const cookie = request.headers.get('cookie') ?? undefined;
	const { data: flow } = await kratos.frontend
		.getLoginFlow({ id: flowId, cookie })
		.catch(handleSoftErrorWithRedirect('login'));
	const { ui } = flow;
	const { messages } = ui;

	if (messages && messages.length > 0) {
		console.debug('UI messages: ', messages);
		if (messages.some(({ id }) => id === 4000010)) {
			// redirect to verification
			const {
				data: {
					id,
					ui: { messages }
				}
			} = await kratos.frontend.createBrowserVerificationFlow();
			const query = new URLSearchParams({ flow: id, message: JSON.stringify(messages) });
			throw redirect(303, `/verification?${query.toString()}`);
		}
	}

	return { ui, registartionUrl: getSelfServiceUrl('registration') };
}) satisfies PageServerLoad;
