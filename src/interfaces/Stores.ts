export type Addons = 'custom_bot' | 'divulgation' | 'antiraid' | 'managed_automod';

export interface PartialStore {
    id: number,
    name: string,
    created_at: number,
    expires_at: number,
    icon_id?: string | null,
    banner_id?: string | null,
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
    created_at: number,
    permissions: StoreModeratorPermissions[]
}

export interface FullStore {
    id: number,
    name: string,
    created_at: number,
    expires_at: number,
    owner_id: number,
    icon_id: string | null,
    banner_id: string | null,
    banner_sale_approved_id: string | null,
    background_ranking_id: string | null,
    addons: Addons[],
    blocked_banks: string[],
    limit_product: number,
    limit_discord_server: number,
    discord_bot: {
        id: string
        cluster: string | null
    },
    moderators: Record<string, StoreModerator>
}

export type StoreInvite = {
    permissions: StoreModeratorPermissions[],
    expires: number
    store: {
        name: string,
        created_at: number
        icon_id?: string | null,
        banner_id?: string | null,
    }
}