import { DiscordGuild } from "./Guild";

export type Addons = 'custom_bot' | 'divulgation' | 'antiraid' | 'managed_automod';
export type Banks = 'Banco Inter S.A.'
    | 'Nu Pagamentos S.A.'
    | 'Picpay Serviços S.A.'
    | 'Mercadopago.com Representações Ltda.'
    | 'Caixa Econômica Federal'
    | 'PagSeguro Internet S.A.'
    | 'Banco do Brasil S.A.'
    | 'Banco Bradesco S.A.'
    | 'Banco Santander (Brasil) S.A.';

export interface PartialStore {
    id: number,
    name: string,
    expires_at: string,
    icon_id?: number | null,
    pending_setup?: boolean | null
}

export interface FullStore {
    id: number,
    name: string,
    created_at: string,
    expires_at: string,
    owner_id: number,
    icon_id: number | null,
    banner_id: number | null,
    addons: Addons[],
    blocked_banks: Banks[],
    pending_setup?: boolean | null,
    discord_channels: Record<
        string /** guild id */,
        Record<
            'sale' | 'voice' | 'feedback' | 'carts',
            string | null | void /** channel id */
        >
    >,
    discord_bot: {
        id: string,
        app_id: string | null,
        token: string | null
    },
    discord_bot_guilds: Record<string, DiscordGuild>
}