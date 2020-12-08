import axios from 'axios';
import { NameSpace, Vault } from './types';

export class Vaultier {
  constructor(public readonly base = 'http://localhost:3666') {
  }

  async store(ns: NameSpace, vault: Vault) {
    return axios.post<boolean>(`${this.base}/store/${ns}`, vault);
  }

  async fetch(ns: NameSpace) {
    return axios.get<Vault>(`${this.base}/fetch/${ns}`);
  }

  async flush(ns: NameSpace) {
    return axios.delete<boolean>(`${this.base}/flush/${ns}`);
  }
}
