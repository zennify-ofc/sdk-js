import pt_BR from '../translations/pt_BR.json';
import en_US from '../translations/en_US.json';
import { ZENNIFY_API_RESPONSE_LANGUAGE } from './var';
import { APIErrors } from './errors';

const errors_translations = { pt_BR, en_US };
const match_regex = /{[\w.]+}/g;
const replacer = (body: any, value: string) => {
    return body[value.slice(1, -1)]
}

type Body = Record<string, any> & {
    code: keyof APIErrors
}

export class ZennifyAPIRequestError extends Error {

    code: keyof APIErrors = "UNKNOWN_ERROR";
    body: Body
    status: number = 0;

    constructor(response: Response, body: Body) {

        super();

        this.body = body;
        this.status = response.status;
        this.code = body.code || 'UNKNOWN_ERROR'

        if (this.status === 401) {
            this.name = "Usuário inválido";
            this.message = "Por favor, se re-autentique";
            return;
        }
        else if (this.status === 503) {
            this.name = "API em atualização.";
            this.message = "Por favor, tente novamente em alguns minutos.";
            return;
        }
        else if (this.status === 429) {
            this.name = "Calma ai!";
            this.message = "Suas ações estão sendo limitadas!";
            return;
        }
        else if (this.code) {

            const error: { name: string, message: string } =
                errors_translations[ZENNIFY_API_RESPONSE_LANGUAGE][this.code] ||
                errors_translations[ZENNIFY_API_RESPONSE_LANGUAGE]["UNKNOWN_TRANSLATION"];

            this.name = error.name
                .replace(match_regex, (value) => replacer(body, value));

            this.message = error.message
                .replace(match_regex, (value) => replacer(body, value));

            return;
        }
        else if (this.status === 401) {
            this.name = "Sem permissões";
            this.message = "Por favor, se re-autentique"
            return;
        }
    }

}