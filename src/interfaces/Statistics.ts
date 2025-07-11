export type ProductStatisticsCustomer = {
    id: number,
    discord_user_id: string,
    value: number,
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
    last_update: number,
    created_at: number
    statistics: Statistics
};