interface ImageSources {
    void: void,
    null: null,
    empty: string,
    product_icon: string,
    general: string
}

const template = `https://cdn.zennify.app/media/{store_id}/{id}.png`
const sources: Record<keyof ImageSources, ImageSources[keyof ImageSources]> = {
    'product_icon': `https://zennify.app/assets/images/emojis/caixa.png`,
    'general': `https://zennify.app/assets/images/icon.png`,
    'void': void 0,
    'null': null,
    'empty': ""
}

export function GetImageURL<Source extends keyof ImageSources>(
    source: Source,
    store_id?: number | null,
    id?: number | null
) {
    if (!store_id || !id) return sources[source] as ImageSources[Source];
    else return template
        .replace("{store_id}", store_id.toString())
        .replace("{id}", id.toString());
}