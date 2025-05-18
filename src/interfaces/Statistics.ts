export type Statistic = {
    count: number,
    users: number,
    value: number,
    rating: number
}

export type Statistics = Record<string, Record<number, Statistic>>
export type StatisticsResponse = {
    last_update: string,
    created_at: string
    statistics: Statistics
}