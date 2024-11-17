export type FullOrder = {
    id: string,
    created_at: string,
    platform: 'discord',
    discord_guild_id?: null | string,
    discount: number,
    subtotal: number,
    total_value: number,
    rating?: null | number,
    rating_message?: null | number,
    metadata?: null | string,
    transaction_data: {
        id: string,
        entity: 'semiauto' | 'mercadopago',
        method: 'pix',
        managed?: null | boolean,
        status: 'approved' | 'cancelled' | 'expired' | 'pending' | 'refused' | 'rejected' | 'analysis',
        value: number,
        base_value: number,
        refunded_value: number,
        refund_reason?: null | string,
        refund_comment?: null | string,
        refund_requested_by?: null | number,
        pix_e2eid?: null | string,
        pix_qrcode?: null | string,
        payer_bank?: null | string
    },
    payer: {
        id: number,
        username: string,
        discord_user_id: string
    },
    seller: {
        id: number,
        username: string,
        discord_user_id: string
    },
    store: {
        id: number,
        name: string,
        icon_id?: null | number,
        banner_id?: null | number
    },
    products: {
        id: number,
        name: string,
        value: number,
        icon_id?: null | number,
        banner_id?: null | number,
        amount: number,
        delivered: string[]
    }[]
}