export type MediaUpdatePayload = {
    store?: ("icon" | "banner" | "banner_sale_approved" | "background_ranking")[],
    products?: Record<string | number, ("icon" | "banner")[]>,
    discord_sale_panels?: Record<string | number, ("icon" | "banner")[]>
}