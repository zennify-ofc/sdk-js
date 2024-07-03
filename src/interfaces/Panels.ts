export interface PanelProduct {
    id: number,
    position: number,
    emoji: string
}

export interface Panel {
    id: number,
    name: string,
    placeholder: string,
    description: string | null,
    icon_id: number | null,
    banner_id: number | null,
    products: PanelProduct[]
}