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
Object.defineProperty(exports, "__esModule", { value: true });
class OrderModel {
    constructor(connection) {
        this.connection = connection;
    }
    getOrder() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.connection.execute(`
    SELECT ord.id, ord.userId, JSON_ARRAYAGG(prod.id) as productsIds
    FROM Trybesmith.Orders as ord
    INNER JOIN Trybesmith.Products as prod
    ON ord.id = prod.orderId
    GROUP BY ord.id
    ORDER BY ord.userId`);
            const [rows] = result;
            return rows;
        });
    }
    create(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const [{ insertId }] = yield this.connection
                .execute('INSERT INTO Trybesmith.Orders (userId) VALUES (?);', [userId]);
            return insertId;
        });
    }
}
exports.default = OrderModel;
