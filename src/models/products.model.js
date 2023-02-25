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
class ProductModel {
    constructor(connection) {
        this.connection = connection;
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.connection.execute('SELECT * FROM Trybesmith.Products');
            const [rows] = result;
            return rows;
        });
    }
    create(product) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, amount } = product;
            const result = yield this.connection.execute('INSERT INTO Trybesmith.Products (name,amount) VALUES (?, ?)', [name, amount]);
            const [dataInserted] = result;
            const { insertId } = dataInserted;
            return Object.assign({ id: insertId }, product);
        });
    }
    update(productId, orderId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.connection
                .execute('UPDATE Trybesmith.Products SET orderId=(?) WHERE id=(?);', [orderId, productId]);
            return productId;
        });
    }
}
exports.default = ProductModel;
