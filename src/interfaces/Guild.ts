import { type ChannelType } from 'discord.js';

export interface DiscordGuildChannel {
    name: string,
    type: ChannelType
}

export interface DiscordGuildRole {
    name: string,
    position: number,
    color: number
}

export interface DiscordGuild {
    id: string,
    name: string,
    icon_url: string,
    owner_id: string,
    channels: Record<string, DiscordGuildChannel>,
    roles: Record<string, DiscordGuildRole>
}