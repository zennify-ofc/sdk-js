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
    icon_id: string | null,
    banner_id: string | null,
    products: PanelProduct[]
}