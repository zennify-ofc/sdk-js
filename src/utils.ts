import { ZennifyAPIRequestError } from './RequestError';
import { APIErrors } from './errors';

type ExpectedErrorAdditional = { field: string; received: any; type: string }
type ExpectedError = Extract<
    APIErrors,
    | 'EXPECTED_AN_OBJECT_ARRAY'
    | 'EXPECTED_A_STRING_ARRAY'
    | 'EXPECTED_A_NUMBER_ARRAY'
    | 'EXPECTED_AN_OBJECT'
    | 'EXPECTED_A_NON_EMPTY_OBJECT'
    | 'EXPECTED_A_STRING'
    | 'EXPECTED_A_NUMBER'
    | 'EXPECTED_A_VALID_ID'
>;

type CommonError = Exclude<APIErrors, ExpectedError>;

export function GetResponseError(code: CommonError): { code: CommonError };
export function GetResponseError(code: ExpectedError, additional: ExpectedErrorAdditional): { code: ExpectedError } & ExpectedErrorAdditional;
export function GetResponseError<T extends object>(code: CommonError, additional?: T): { code: CommonError } & T;
export function GetResponseError(code: APIErrors, additional: any = {}) {
    return { code, ...additional };
}

export async function TreatZennifyResponse<T extends any>(response: Response): Promise<T> {

    const body = await response.json().catch(() => ({}));

    if (response.ok) {
        return body as T;
    }

    throw new ZennifyAPIRequestError(response, body);

}