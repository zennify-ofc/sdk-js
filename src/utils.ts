import { ZennifyAPIRequestError } from './RequestError';
import { APIErrors } from './errors';

export function GetResponseError(
    error: keyof APIErrors,
    additional: any = {}
): { error: keyof APIErrors | string, code: number } & Record<string, any> {

    const code = APIErrors[error];

    return { error, code, ...additional }

}

export async function TreatZennifyResponse<T extends any>(response: Response): Promise<T> {

    const body = await response.json();

    if (response.ok) {
        return body as T;
    }

    throw new ZennifyAPIRequestError(response, body);

}