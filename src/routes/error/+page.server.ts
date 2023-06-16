import kratos from '$lib/kratos';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async ({ url }) => {
	const searchParams = url.searchParams;
	const id = searchParams.get('id');
	if (id === null) {
		console.debug('No flow ID found in URL query in error page', url.searchParams);
		throw error(500);
	}
	const { data } = await kratos.frontend.getFlowError({ id });

	return data;
}) satisfies PageServerLoad;
