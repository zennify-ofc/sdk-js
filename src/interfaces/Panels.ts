export interface PanelProduct {
    id: number,
    emoji?: string | null,
    label?: string | null
}

export interface Panel {
    id: number,
    name: string,
    created_at: number,
    placeholder: string | null,
    description: string | null,
    icon_id: string | null,
    banner_id: string | null,
    owner_id: number,
    store_id: number,
    products: PanelProduct[]
}