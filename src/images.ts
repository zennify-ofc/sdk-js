import { ZennifySDK } from "./main";

const fallbacks = {
    'product_icon': `https://zennify.app/assets/images/emojis/caixa.png`,
    'general': `https://zennify.app/assets/images/icon.png`,
    'void': void 0,
    'null': null,
    'empty': ""
} as const;

type Fallbacks = typeof fallbacks;

export function GetImageURL<Fallback extends keyof Fallbacks>(
    this: ZennifySDK,
    fallback: Fallback,
    hash?: string | null
): Fallbacks[Fallback] | string {
    if (!hash) return fallbacks[fallback];
    else return `https://cdn.${this.domain}/media/${hash}`
}