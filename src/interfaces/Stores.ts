import { DiscordGuild } from "./Guild";

export type Addons = 'custom_bot' | 'divulgation' | 'antiraid' | 'managed_automod';

export interface PartialStore {
    id: number,
    name: string,
    expires_at: string,
    icon_id?: string | null,
    banner_id?: string | null,
    pending_setup?: boolean | null
}

export interface FullStore {
    id: number,
    name: string,
    created_at: string,
    expires_at: string,
    owner_id: number,
    icon_id: string | null,
    banner_id: string | null,
    banner_discord_sale_message_id: string | null,
    background_ranking_id: string | null,
    addons: Addons[],
    blocked_banks: string[],
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