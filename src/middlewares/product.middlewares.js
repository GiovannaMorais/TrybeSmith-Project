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
class ProductsMiddleware {
    constructor() {
        this.validateProductsName = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const product = req.body;
            const { name } = product;
            if (!name)
                return res.status(statusCodes_1.default.BAD_REQUEST).json({ message: '"name" is required' });
            if (typeof name !== 'string') {
                return res.status(statusCodes_1.default.TYPE_ERROR).json({ message: '"name" must be a string' });
            }
            if (name.length < 3) {
                return res.status(statusCodes_1.default.TYPE_ERROR)
                    .json({ message: '"name" length must be at least 3 characters long' });
            }
            next();
        });
        this.validateProductsAmount = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const product = req.body;
            const { amount } = product;
            if (!amount) {
                return res.status(statusCodes_1.default.BAD_REQUEST)
                    .json({ message: '"amount" is required' });
            }
            if (typeof amount !== 'string') {
                return res.status(statusCodes_1.default.TYPE_ERROR).json({ message: '"amount" must be a string' });
            }
            if (amount.length < 3) {
                return res.status(statusCodes_1.default.TYPE_ERROR)
                    .json({ message: '"amount" length must be at least 3 characters long' });
            }
            next();
        });
    }
}
exports.default = ProductsMiddleware;
