export type Statistic = {
    count: number,
    users: number,
    value: number,
    rating: number,
    customers: Array<{
        id: number,
        discord_user_id: string,
        value: number
    }>
}

export type Statistics = Record<string, Record<number, Statistic>>
export type StatisticsResponse = {
    last_update: string,
    created_at: string
    statistics: Statistics
}