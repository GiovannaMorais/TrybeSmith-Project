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
class OrdersMiddleware {
    constructor() {
        this.validateProductId = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const { productsIds } = req.body;
            if (!productsIds) {
                return res.status(statusCodes_1.default.BAD_REQUEST)
                    .json({ message: '"productsIds" is required' });
            }
            if (!Array.isArray(productsIds)) {
                return res.status(statusCodes_1.default.TYPE_ERROR).json({ message: '"productsIds" must be an array' });
            }
            if (productsIds.length === 0) {
                return res.status(statusCodes_1.default.TYPE_ERROR)
                    .json({ message: '"productsIds" must include only numbers' });
            }
            next();
        });
    }
}
exports.default = OrdersMiddleware;
