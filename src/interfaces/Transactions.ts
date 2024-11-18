export type FullTransaction = {
    id: string,
    entity: 'semiauto' | 'mercadopago',
    method: 'pix',
    managed: null,
    status: 'approved' | 'cancelled' | 'expired' | 'pending' | 'refused' | 'rejected' | 'analysis',
    value: number,
    base_value: number,
    refunded_value: number,
    refund_reason: null,
    refund_comment: null,
    refund_requested_by: null,
    pix_e2eid: null,
    pix_qrcode: null,
    payer_bank: null,
    order: {
        id: string,
        created_at: string,
        platform: 'discord',
        discord_guild_id: null,
        discount: number,
        subtotal: number,
        total_value: number,
        rating: null,
        rating_message: null,
        metadata: null,
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
            icon_id: null,
            banner_id: null
        },
        products: [
            {
                id: number,
                name: string,
                value: number,
                icon_id: null,
                banner_id: null,
                amount: number,
                delivered: string[]
            }
        ]
    }
}