export interface PartialProduct {
    id: number,
    name: string,
    value: number,
    icon_id: number | null,
    banner_id: number | null,
    stock_locked: boolean | null,
    stock_count: number
}

export interface Product {
    id: number,
    name: string,
    created_at: string,
    store_id: number,
    owner_id: number,
    icon_id: null | number,
    banner_id: null | number,
    value: number,
    description: {
        short: null | string,
        discord: null | string,
        website: null | string
    },
    stock: {
        size: number,
        locked: boolean
    },
    statistics: {
        revenue_total: number,
        revenue_daily: number,
        revenue_weekly: number,
        revenue_monthly: number
    }
}