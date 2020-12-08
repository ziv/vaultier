import { NameSpace, Vault } from './types';
export declare class Vaultier {
    readonly base: string;
    constructor(base?: string);
    store(ns: NameSpace, vault: Vault): Promise<import("axios").AxiosResponse<boolean>>;
    fetch(ns: NameSpace): Promise<import("axios").AxiosResponse<Record<string, string>>>;
    flush(ns: NameSpace): Promise<import("axios").AxiosResponse<boolean>>;
}
