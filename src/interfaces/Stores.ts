import { DiscordGuild } from "./Guild";

export type Addons = 'custom_bot' | 'divulgation' | 'antiraid' | 'managed_automod';

export interface PartialStore {
    id: number,
    name: string,
    expires_at: string,
    icon_id?: string | null,
    banner_id?: string | null,
    pending_setup?: boolean | null,
    is_owner: boolean
}

export type StoreModeratorPermissions =
    | 'MANAGE_DISCORD_PANELS' // Gerenciar painéis do Discord
    | 'MANAGE_PRODUCTS'       // Gerenciar produtos
    | 'MANAGE_COUPONS'        // Gerenciar cupons
    | 'MANAGE_STORE'          // Gerenciar a loja (Editar bot, nome, imagem, bancos bloqueados) e comandos /customize, /mod, /autorole, /temprole
    | 'MANAGE_SALES'          // Gerenciar vendas (Aprovar, cancelar e reembolsar)
    | 'VIEW_STATISTICS'       // Ver estatísticas (Acessar a home da dashboard, usar o comando /ranking e ver estatisticas de produtos)


export type StoreModerator = {
    username: string,
    discord_user_id: string | null,
    created_at: string,
    permissions: StoreModeratorPermissions[]
}

export interface FullStore {
    id: number,
    name: string,
    created_at: string,
    expires_at: string,
    owner_id: number,
    icon_id: string | null,
    banner_id: string | null,
    banner_sale_approved_id: string | null,
    background_ranking_id: string | null,
    addons: Addons[],
    blocked_banks: string[],
    pending_setup?: boolean | null,
    limit_product: number,
    limit_discord_server: number,
    discord_channels: Record<
        string /** guild id */,
        Record<
            'sale' | 'voice' | 'feedback' | 'carts',
            string | null | void /** channel id */
        >
    >,
    discord_bot: {
        id: string
        token: string | null
        cluster: string | null
    },
    moderators: Record<string, StoreModerator>,
    discord_bot_guilds: Record<string, DiscordGuild>
}

export type StoreInvite = {
    invite: {
        permissions: StoreModeratorPermissions[],
        expires: number
    },
    store: {
        name: string,
        created_at: string
        icon_id?: string | null,
        banner_id?: string | null,
    }
}