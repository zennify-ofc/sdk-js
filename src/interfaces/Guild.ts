import { type ChannelType } from 'discord.js';

export interface DiscordGuildChannel {
    id: string,
    name: string,
    type: ChannelType
}

export interface DiscordGuildRole {
    id: string,
    name: string,
    position: number,
    color: number
}

export interface DiscordGuild {
    id: string,
    name: string,
    icon_url: string,
    owner_id: string,
    channels: DiscordGuildChannel[]
}