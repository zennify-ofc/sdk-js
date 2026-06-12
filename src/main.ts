import {
    GetStoreCatalogsResponse,
    GetStoreProductResponse,
    GetStoreProductStockResponse,
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

// Utilidades
type Body<T extends { body?: unknown }> = NonNullable<T["body"]>;

// Usuários, media, tipos gerais
export type ZennifyUser = GetUserResponse;
export type MediaUpdatePayload = Body<UploadStoreMediaData>;

// Stores
export type PartialStore = GetStoresResponse[number];
export type FullStore = GetStoreResponse;

export type StoreModerator = FullStore["moderators"][number];
export type StoreModeratorPermissions = StoreModerator["permissions"][number];

// Produtos
export type PartialProduct = ListStoreProductsResponse[number];
export type Product = GetStoreProductResponse;
export type ProductStock = GetStoreProductStockResponse[number];

// Transações
export type TransactionStatus = FullTransaction["status"];
export type PartialTransaction = ListTransactionsResponse[number];
export type FullTransaction<T = never> = GetTransactionResponse & {
    metadata: T;
};

// Catálogos
export type Catalog = GetStoreCatalogsResponse[number];
export type CatalogProduct = Catalog["products"][number];
