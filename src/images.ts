interface ImageSources {
    void: void,
    null: null,
    empty: string,
    product_icon: string,
    general: string
}

const sources: Record<keyof ImageSources, ImageSources[keyof ImageSources]> = {
    'product_icon': `https://zennify.app/assets/images/emojis/caixa.png`,
    'general': `https://zennify.app/assets/images/icon.png`,
    'void': void 0,
    'null': null,
    'empty': ""
}

export function GetImageURL<Source extends keyof ImageSources>(
    source: Source,
    hash?: string | null,
    domain: string = "zennify.app"
): ImageSources[Source] | string {
    if (!hash) return sources[source] as ImageSources[Source];
    else return `https://cdn.${domain}/media/${hash}`;
}