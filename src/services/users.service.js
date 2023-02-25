"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("../models/connection"));
const users_model_1 = __importDefault(require("../models/users.model"));
class UserService {
    constructor() {
        this.model = new users_model_1.default(connection_1.default);
    }
    create(user) {
        return this.model.create(user);
    }
}
exports.default = UserService;
