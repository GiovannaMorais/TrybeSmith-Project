"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const products_routes_1 = __importDefault(require("./routes/products.routes"));
const users_routes_1 = __importDefault(require("./routes/users.routes"));
const orders_routes_1 = __importDefault(require("./routes/orders.routes"));
const login_routes_1 = __importDefault(require("./routes/login.routes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(products_routes_1.default);
app.use(users_routes_1.default);
app.use(orders_routes_1.default);
app.use(login_routes_1.default);
exports.default = app;
