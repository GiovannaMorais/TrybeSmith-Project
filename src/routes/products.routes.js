"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const products_controller_1 = __importDefault(require("../controllers/products.controller"));
const product_middlewares_1 = __importDefault(require("../middlewares/product.middlewares"));
const router = (0, express_1.Router)();
const productsController = new products_controller_1.default();
const productsMiddleware = new product_middlewares_1.default();
router.post('/products', productsMiddleware.validateProductsAmount, productsMiddleware.validateProductsName, productsController.create);
router.get('/products', productsController.getAll);
exports.default = router;
