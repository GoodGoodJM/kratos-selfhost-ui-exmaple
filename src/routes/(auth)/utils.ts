import { getSelfServiceUrl } from '$lib/kratos';
import { redirect } from '@sveltejs/kit';
import type { AxiosError } from 'axios';

type SoftErrorRedirectPath = 'registration' | 'login' | 'verification';
export function handleSoftErrorWithRedirect(path: SoftErrorRedirectPath) {
	return (error: AxiosError) => {
		const { response } = error;
		const isSoftError = [403, 404, 410].some((code) => code === response?.status);
		if (isSoftError) {
			console.debug(`Soft error response(${response?.status}) is occured, it will be redirected.`);
		}
		throw isSoftError ? redirect(303, getSelfServiceUrl(path)) : error;
	};
}
