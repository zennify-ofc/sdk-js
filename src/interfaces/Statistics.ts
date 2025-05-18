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
};

export type Ranking = {
    id: number,
    discord_user_id: string,
    revenue: number,
    sales: number
};

export type RankingResponse = Ranking[]