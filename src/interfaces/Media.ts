export type MediaUpdatePayload = {
    store?: ("icon" | "banner" | "banner_discord_sale_message" | "background_ranking")[],
    products?: Record<string | number, ("icon" | "banner")[]>,
    discord_sale_panels?: Record<string | number, ("icon" | "banner")[]>
}