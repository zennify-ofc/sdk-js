export interface PartialProduct {
    id: number,
    name: string,
    value: number,
    icon_id: string | null,
    banner_id: string | null,
    stock_locked: boolean | null,
    stock_count: number
}

export interface Product {
    id: number,
    name: string,
    created_at: string,
    store_id: number,
    owner_id: number,
    icon_id?: string | null,
    banner_id?: string | null,
    value: number,
    description: {
        short: null | string,
        discord: null | string,
        website: null | string
    },
    stock: {
        size: number,
        locked: boolean
    }
}