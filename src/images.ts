type ImageSources = 'product_icon' | 'general'

const template = `https://cdn.zennify.app/media/{store_id}/{id}.png`
const sources: Record<ImageSources, string> = {
    'product_icon': `https://zennify.app/assets/images/emojis/caixa.png`,
    'general': `https://zennify.app/assets/images/icon.png`
}

export function GetImageURL(source: ImageSources, store_id?: number | null, id?: number | null) {
    if (!store_id || !id) return sources[source];
    else return template
        .replace("{store_id}", store_id.toString())
        .replace("{id}", id.toString());
}