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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("../models/connection"));
const orders_model_1 = __importDefault(require("../models/orders.model"));
class OrderService {
    constructor() {
        this.model = new orders_model_1.default(connection_1.default);
    }
    getOrder() {
        return __awaiter(this, void 0, void 0, function* () {
            const products = yield this.model.getOrder();
            return products;
        });
    }
    create(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.model.create(userId);
            return result;
        });
    }
}
exports.default = OrderService;
