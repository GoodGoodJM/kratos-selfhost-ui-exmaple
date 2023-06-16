import kratos, { getSelfServiceUrl } from '$lib/kratos';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async ({ request }) => {
	const cookie = request.headers.get('cookie') ?? undefined;
	const {
		data: { logout_url: logoutUrl }
	} = await kratos.frontend
		.createBrowserLogoutFlow({ cookie })
		.catch(() => ({ data: { logout_url: '' } }));

	const { data: sessions } = await kratos.frontend.toSession({ cookie }).catch(() => {
		throw redirect(303, getSelfServiceUrl('login'));
	});
	return {
		logoutUrl,
		sessions
	};
}) satisfies PageServerLoad;
