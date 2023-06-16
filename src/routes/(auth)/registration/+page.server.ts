import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import kratos, { getSelfServiceUrl } from '$lib/kratos';
import { handleSoftErrorWithRedirect } from '../utils';

export const load = (async ({ url, request }) => {
	const searchParams = url.searchParams;
	const flowId = searchParams.get('flow');

	if (flowId === null) {
		console.debug('No flow ID found in URL query initalizing login flow', url.searchParams);
		throw redirect(303, getSelfServiceUrl('registration'));
	}

	const cookie = request.headers.get('cookie') ?? undefined;
	const { data: flow } = await kratos.frontend
		.getRegistrationFlow({ id: flowId, cookie })
		.catch(handleSoftErrorWithRedirect('registration'));
	const { ui } = flow;
	return { ui };
}) satisfies PageServerLoad;
