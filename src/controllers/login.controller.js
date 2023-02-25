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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const login_service_1 = __importDefault(require("../services/login.service"));
const statusCodes_1 = __importDefault(require("../statusCodes"));
const TOKEN_SECRET_KEY = process.env.SECRET || 'secret';
class LoginController {
    constructor(loginService = new login_service_1.default()) {
        this.loginService = loginService;
        this.SignIn = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const user = req.body;
            const token = jsonwebtoken_1.default.sign({ user }, TOKEN_SECRET_KEY);
            yield this.loginService.SignIn(user);
            res.status(statusCodes_1.default.OK).json({ token });
        });
    }
}
exports.default = LoginController;
