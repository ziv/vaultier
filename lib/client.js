"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vaultier = void 0;
const axios_1 = require("axios");
const types_1 = require("./types");
class Vaultier {
    constructor(base = 'http://localhost:3666') {
        this.base = base;
    }
    store(ns, vault) {
        return __awaiter(this, void 0, void 0, function* () {
            return axios_1.default.post(`${this.base}/store/${ns}`, vault);
        });
    }
    fetch(ns) {
        return __awaiter(this, void 0, void 0, function* () {
            return axios_1.default.get(`${this.base}/fetch/${ns}`);
        });
    }
    flush(ns) {
        return __awaiter(this, void 0, void 0, function* () {
            return axios_1.default.delete(`${this.base}/flush/${ns}`);
        });
    }
    isEmpty(ns) {
        return __awaiter(this, void 0, void 0, function* () {
            const vault = yield this.fetch(ns);
            return vault[types_1.vaultEmptyKey] && vault[types_1.vaultEmptyKey] === '1';
        });
    }
}
exports.Vaultier = Vaultier;
//# sourceMappingURL=client.js.map