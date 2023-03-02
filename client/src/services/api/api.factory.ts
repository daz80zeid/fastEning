import {Headers} from "./api.header.interface";
import {ApiClient} from "./api.client";


export class ApiClientFactory {
    constructor(
        private readonly baseUrl: string,
        private readonly headers: Headers = {}
    ) {}

    public createClient(): ApiClient {
        return new ApiClient(this.baseUrl, this.headers);
    }

    public createAuthorizedClient(authToken: string): ApiClient {
        return new ApiClient(this.baseUrl, this.headers, authToken);
    }
}