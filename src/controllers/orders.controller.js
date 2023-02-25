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
const orders_service_1 = __importDefault(require("../services/orders.service"));
const statusCodes_1 = __importDefault(require("../statusCodes"));
const products_service_1 = __importDefault(require("../services/products.service"));
const connection_1 = __importDefault(require("../models/connection"));
const users_model_1 = __importDefault(require("../models/users.model"));
class UserController {
    constructor(orderService = new orders_service_1.default()) {
        this.orderService = orderService;
        this.getOrder = (_req, res) => __awaiter(this, void 0, void 0, function* () {
            const products = yield this.orderService.getOrder();
            res.status(statusCodes_1.default.OK).json(products);
        });
        this.create = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { productsIds } = req.body;
            const { userName } = res.locals;
            const result = new users_model_1.default(connection_1.default);
            const id = yield result.findByUsername(userName);
            const userIDS = id[0].id;
            const insertId = yield this.orderService.create(userIDS);
            const productService = new products_service_1.default();
            yield productService.update(productsIds, insertId);
            return res.status(statusCodes_1.default.CREATED).json({ userId: userIDS, productsIds });
        });
    }
}
exports.default = UserController;
