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
const login_service_1 = __importDefault(require("../services/login.service"));
class LoginMiddleware {
    constructor(loginService = new login_service_1.default()) {
        this.loginService = loginService;
        this.validateLogin = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const login = req.body;
            const { username, password } = login;
            if (!username) {
                return res.status(statusCodes_1.default.BAD_REQUEST).json({ message: '"username" is required' });
            }
            if (!password) {
                return res.status(statusCodes_1.default.BAD_REQUEST).json({ message: '"password" is required' });
            }
            const fieldValid = yield this.loginService.SignIn(login);
            if (!fieldValid) {
                return res.status(statusCodes_1.default.UNAUTHORIZED).json({ message: 'Username or password invalid' });
            }
            next();
        });
    }
}
exports.default = LoginMiddleware;
