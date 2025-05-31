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
    // token?: string
}

export class ZennifySDK {

    private readonly domain: string;
    // private readonly token: string | null = null;
    // private readonly user_agent: string = "Zennify-sdk";

    constructor(options?: SDKOptions) {
        this.domain = options?.domain ?? "zennify.app";
        // this.token = options?.token ?? null;
    }

    media = {
        get_url: async (...options: Parameters<typeof GetImageURL>) => {
            return GetImageURL(...options)?.replace("zennify.app", this.domain)
        }
    }

}