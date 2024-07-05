import { ZennifyAPIRequestError } from './RequestError';
import { APIErrors } from './errors';

export function GetResponseError<Code extends keyof APIErrors>(
    code: Code,
    additional: APIErrors[Code]
) { return { code, ...additional }; }

export async function TreatZennifyResponse<T extends any>(response: Response): Promise<T> {

    const body = await response.json().catch(() => ({}));

    if (response.ok) {
        return body as T;
    }

    throw new ZennifyAPIRequestError(response, body);

}
