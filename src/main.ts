import {
    ListProductCatalogsResponse,
    GetProductResponse,
    GetProductStockResponse,
    GetStoreResponse,
    ListStoresResponse,
    GetTransactionResponse,
    GetUserResponse,
    ListProductsResponse,
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
export type PartialStore = ListStoresResponse[number];
export type FullStore = GetStoreResponse;

export type StoreModerator = FullStore["moderators"][number];
export type StoreModeratorPermissions = StoreModerator["permissions"][number];

// Produtos
export type PartialProduct = ListProductsResponse[number];
export type Product = GetProductResponse;
export type ProductStock = GetProductStockResponse[number];

// Transações
export type TransactionStatus = FullTransaction["status"];
export type PartialTransaction = ListTransactionsResponse[number];
export type FullTransaction<T = never> = GetTransactionResponse & {
    metadata: T;
};

// Catálogos
export type Catalog = ListProductCatalogsResponse[number];
export type CatalogProduct = Catalog["products"][number];
