export type ProductStatisticsCustomer = {
    id: number,
    discord_user_id: string,
    revenue: number,
    sales: number
};

export type ProductStatistics = {
    count: number,
    users: number,
    value: number,
    rating: number,
    customers: ProductStatisticsCustomer[]
}

export type Statistics = Record<string, Record<number, ProductStatistics>>
export type StatisticsResponse = {
    last_update: string,
    created_at: string
    statistics: Statistics
};