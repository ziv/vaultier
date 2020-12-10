import axios, {AxiosResponse} from 'axios';
import {NameSpace, Vault, vaultEmptyKey} from './types';

export const toData = (res: AxiosResponse) => res.data;

export class Vaultier {
  constructor(public readonly base = 'http://localhost:3666') {
  }

  async store(ns: NameSpace, vault: Vault): Promise<boolean> {
    return axios.post<boolean>(`${this.base}/store/${ns}`, vault).then(toData);
  }

  async fetch(ns: NameSpace): Promise<Vault> {
    return axios.get<Vault>(`${this.base}/fetch/${ns}`).then(toData)
  }

  async flush(ns: NameSpace): Promise<boolean> {
    return axios.delete<boolean>(`${this.base}/flush/${ns}`).then(toData);
  }

  async isEmpty(ns: NameSpace): Promise<boolean> {
    const vault = await this.fetch(ns);
    return vault[vaultEmptyKey] && vault[vaultEmptyKey] === '1';
  }
}
