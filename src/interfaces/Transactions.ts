export type BaseTransaction<TransactionMetadata extends any = any> = {
    id: string,
    created_at: string,
    entity: 'semiauto' | 'mercadopago',
    method: 'pix',
    managed?: boolean | null,
    status: 'approved' | 'cancelled' | 'expired' | 'pending' | 'refused' | 'rejected' | 'analysis',
    value: number,
    base_value: number,
    refunded_value: number,
    refund_reason?: string | null,
    refund_comment?: string | null,
    refund_requested_by?: string | null,
    pix_e2eid?: string | null,
    pix_qrcode?: string | null,
    payer_bank?: string | null,
    metadata?: TransactionMetadata | null
};

type DiscordOrder = {
    platform: 'discord',
    discord_guild_id?: string | null,
    discord_channel_id?: string | null,
    discord_channel_message_id?: string | null
}

export type SaleTransaction = BaseTransaction & {
    type: 'sale',
    order: DiscordOrder & {
        id: string,
        created_at: string,
        discount: number,
        subtotal: number,
        total_value: number,
        rating?: number | null,
        rating_message?: number | null,
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
            icon_id?: number | null,
            banner_id?: number | null
        },
        products: [
            {
                id: number,
                name: string,
                value: number,
                icon_id?: number | null,
                banner_id?: number | null
                amount: number,
                delivered: string[]
            }
        ]
    }
};

export type FullTransaction<TransactionMetadata extends any = any> = BaseTransaction<TransactionMetadata> & SaleTransaction;