import { AxiosResponse } from 'axios';
import { NameSpace, Vault } from './types';
export declare const toData: (res: AxiosResponse) => any;
export declare class Vaultier {
    readonly base: string;
    constructor(base?: string);
    store(ns: NameSpace, vault: Vault): Promise<boolean>;
    fetch(ns: NameSpace): Promise<Vault>;
    flush(ns: NameSpace): Promise<boolean>;
    isEmpty(ns: NameSpace): Promise<boolean>;
}
