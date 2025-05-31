import { GetImageURL } from './images';

export * from './var';
export * from './errors';
export * from './utils';
export * from './RequestError';

export * from './interfaces/Panels';
export * from './interfaces/Products';
export * from './interfaces/Guild';
export * from './interfaces/Stores';
export * from './interfaces/Transactions';
export * from './interfaces/Statistics';

type SDKOptions = {
    domain?: string,
    // language?: SupportedLanguages
    // token?: string
}

export class ZennifySDK {

    protected readonly domain: string;
    protected readonly token: string | null = null;
    // protected readonly language: SupportedLanguages;
    // private readonly user_agent: string = "Zennify-sdk";

    constructor(options?: SDKOptions) {
        this.domain = options?.domain ?? "zennify.app";
        // this.language = options?.language ?? "en_US";
        // this.token = options?.token ?? null;
    }

    media = { get_url: GetImageURL }

}