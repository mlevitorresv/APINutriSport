"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaleModel = exports.saleSchema = void 0;
const dataTypes_1 = require("../util/dataTypes");
const mongoose_1 = require("mongoose");
exports.saleSchema = new mongoose_1.Schema({
    customer: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Customer', required: true },
    employee: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Employee', required: true },
    products: {
        type: [
            {
                type: mongoose_1.Schema.Types.ObjectId,
                required: true,
                ref: 'Products'
            }
        ]
    },
    date: { type: Date, required: true },
    payMethod: { type: String, enum: dataTypes_1.PayTypes, required: true },
    invoiceNumber: { type: Number, required: true },
});
exports.SaleModel = (0, mongoose_1.model)('Sale', exports.saleSchema);
