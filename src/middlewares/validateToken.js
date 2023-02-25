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
const statusCodes_1 = __importDefault(require("../statusCodes"));
const TOKEN_SECRET_KEY = process.env.SECRET || 'secret';
class ValidateToken {
    constructor() {
        this.authentication = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const token = req.header('Authorization');
            if (!token) {
                return res.status(statusCodes_1.default.UNAUTHORIZED)
                    .json({ message: 'Token not found' });
            }
            try {
                const decoded = jsonwebtoken_1.default.verify(token, TOKEN_SECRET_KEY);
                res.locals.userName = decoded.user.username;
                next();
            }
            catch (error) {
                return res.status(statusCodes_1.default.UNAUTHORIZED).json({ message: 'Invalid token' });
            }
        });
    }
}
exports.default = ValidateToken;
