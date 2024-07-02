import pt_BR from '../translations/pt_BR.json';
import en_US from '../translations/en_US.json';
import { ZENNIFY_API_RESPONSE_LANGUAGE } from './var';

const errors_translations = { pt_BR, en_US };
const match_regex = /{[\w.]+}/g;
const replacer = (body: any, value: string) => {
    return body[value.slice(1, -1)]
}

interface Body extends Record<string, any> {
    code: number
}

export class ZennifyAPIRequestError extends Error {

    status: number = 0;
    code: number = 0;
    body: Body

    constructor(response: Response, body: Body) {

        super();

        this.body = body;
        this.status = response.status;

        if (this.status === 403) {
            this.name = "Usuário inválido";
            this.message = "Por favor, se re-autentique"
        }

        if (this.status === 503) {
            this.name = "API em atualização.";
            this.message = "Por favor, tente novamente em alguns minutos.";
        }

        if (this.status === 429) {
            this.name = "Calma ai!";
            this.message = "Suas ações estão sendo limitadas!";
        }

        const error: { name: string, message: string } =
            errors_translations[ZENNIFY_API_RESPONSE_LANGUAGE][body.code] ||
            errors_translations[ZENNIFY_API_RESPONSE_LANGUAGE][1];

        this.name = error.name
            .replace(match_regex, (value) => replacer(body, value));

        this.message = error.message
            .replace(match_regex, (value) => replacer(body, value));

    }

}