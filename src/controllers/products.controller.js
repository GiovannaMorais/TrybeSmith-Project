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
const statusCodes_1 = __importDefault(require("../statusCodes"));
const products_service_1 = __importDefault(require("../services/products.service"));
class ProductController {
    constructor(productService = new products_service_1.default()) {
        this.productService = productService;
        this.getAll = (_req, res) => __awaiter(this, void 0, void 0, function* () {
            const products = yield this.productService.getAll();
            res.status(statusCodes_1.default.OK).json(products);
        });
        this.create = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const product = req.body;
            const productCreated = yield this.productService.create(product);
            res.status(statusCodes_1.default.CREATED).json(productCreated);
        });
    }
}
exports.default = ProductController;
