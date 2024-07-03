export type SupportedLanguages = 'pt_BR' | 'en_US';
export let ZENNIFY_API_RESPONSE_LANGUAGE: SupportedLanguages = 'en_US';
export function SetAPIResponseLanguage(lang: SupportedLanguages) {
    return ZENNIFY_API_RESPONSE_LANGUAGE = lang;
}