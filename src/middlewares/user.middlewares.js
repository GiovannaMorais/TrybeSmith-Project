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
class UsersMiddleware {
    constructor() {
        this.validateUsername = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const { username } = req.body;
            if (!username) {
                return res.status(statusCodes_1.default.BAD_REQUEST)
                    .json({ message: '"username" is required' });
            }
            if (typeof username !== 'string') {
                return res.status(statusCodes_1.default.TYPE_ERROR).json({ message: '"username" must be a string' });
            }
            if (username.length < 3) {
                return res.status(statusCodes_1.default.TYPE_ERROR)
                    .json({ message: '"username" length must be at least 3 characters long' });
            }
            next();
        });
        this.validateClasse = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const { classe } = req.body;
            if (!classe) {
                return res.status(statusCodes_1.default.BAD_REQUEST)
                    .json({ message: '"classe" is required' });
            }
            if (typeof classe !== 'string') {
                return res.status(statusCodes_1.default.TYPE_ERROR).json({ message: '"classe" must be a string' });
            }
            if (classe.length < 3) {
                return res.status(statusCodes_1.default.TYPE_ERROR)
                    .json({ message: '"classe" length must be at least 3 characters long' });
            }
            next();
        });
        this.validateLevel = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const { level } = req.body;
            if (level <= 1) {
                return res.status(statusCodes_1.default.TYPE_ERROR)
                    .json({ message: '"level" must be greater than or equal to 1' });
            }
            if (!level) {
                return res.status(statusCodes_1.default.BAD_REQUEST)
                    .json({ message: '"level" is required' });
            }
            if (typeof level !== 'number') {
                return res.status(statusCodes_1.default.TYPE_ERROR).json({ message: '"level" must be a number' });
            }
            next();
        });
        this.validatePassword = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const { password } = req.body;
            if (!password) {
                return res.status(statusCodes_1.default.BAD_REQUEST)
                    .json({ message: '"password" is required' });
            }
            if (typeof password !== 'string') {
                return res.status(statusCodes_1.default.TYPE_ERROR).json({ message: '"password" must be a string' });
            }
            if (password.length < 8) {
                return res.status(statusCodes_1.default.TYPE_ERROR)
                    .json({ message: '"password" length must be at least 8 characters long' });
            }
            next();
        });
    }
}
exports.default = UsersMiddleware;
