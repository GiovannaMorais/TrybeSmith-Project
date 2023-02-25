"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_controller_1 = __importDefault(require("../controllers/users.controller"));
const user_middlewares_1 = __importDefault(require("../middlewares/user.middlewares"));
const router = (0, express_1.Router)();
const userController = new users_controller_1.default();
const usersMiddleware = new user_middlewares_1.default();
router.post('/users/', usersMiddleware.validateUsername, usersMiddleware.validateClasse, usersMiddleware.validateLevel, usersMiddleware.validatePassword, userController.create);
exports.default = router;
