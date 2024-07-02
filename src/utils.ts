import { ZennifyAPIRequestError } from './RequestError';
import { APIErrors } from './errors';

export function GetResponseError(
    code: APIErrors,
    additional: any = {}
): { error: keyof APIErrors | string, code: number } & Record<string, any> {

    return { code, ...additional }

}

export async function TreatZennifyResponse<T extends any>(response: Response): Promise<T> {

    const body = await response.json();

    if (response.ok) {
        return body as T;
    }

    throw new ZennifyAPIRequestError(response, body);

}