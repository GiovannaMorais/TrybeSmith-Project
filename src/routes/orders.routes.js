"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const orders_controller_1 = __importDefault(require("../controllers/orders.controller"));
const validateToken_1 = __importDefault(require("../middlewares/validateToken"));
const order_middlewares_1 = __importDefault(require("../middlewares/order.middlewares"));
const router = (0, express_1.Router)();
const orderController = new orders_controller_1.default();
const validateToken = new validateToken_1.default();
const orderMiddleware = new order_middlewares_1.default();
router.post('/orders/', validateToken.authentication, orderMiddleware.validateProductId, orderController.create);
router.get('/orders/', orderController.getOrder);
exports.default = router;
