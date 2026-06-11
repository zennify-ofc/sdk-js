import {
    GetStoreDiscordPanelsResponse,
    GetStoreProductResponse,
    GetStoreResponse,
    GetStoresResponse,
    GetTransactionResponse,
    GetUserResponse,
    ListStoreProductsResponse,
    ListTransactionsResponse,
    UploadStoreMediaData,
} from "./lib/api";

export * from "./images";
export * from "./lib/api/index";

export * from "./interfaces/Guild";

// Usuários, media, tipos gerais
export type ZennifyUser = GetUserResponse;
export type MediaUpdatePayload = UploadStoreMediaData;

// Stores
export type PartialStore = GetStoresResponse[number];
export type FullStore = GetStoreResponse;

export type StoreModerator = FullStore["moderators"][number];
export type StoreModeratorPermissions = StoreModerator["permissions"][number];

// Produtos
export type PartialProduct = ListStoreProductsResponse;
export type Product = GetStoreProductResponse;

// Transações
export type TransactionStatus = FullTransaction["status"];
export type PartialTransaction = ListTransactionsResponse[number];
export type FullTransaction<T = never> = GetTransactionResponse & {
    metadata: T;
};

// Painéis
export type Panel = GetStoreDiscordPanelsResponse[number];
export type PanelProduct = Panel["products"][number];
