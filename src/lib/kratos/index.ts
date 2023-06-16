import { KRATOS_PATH } from '$env/static/private';
import { Configuration, FrontendApi } from '@ory/client';

const kratos = {
	basePath: KRATOS_PATH,
	frontend: new FrontendApi(new Configuration({ basePath: KRATOS_PATH }))
};

export default kratos;

export function getSelfServiceUrl(type: string): string {
	return new URL(`/self-service/${type}/browser`, kratos.basePath).toString();
}
