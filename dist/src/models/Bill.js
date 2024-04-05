"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillModel = void 0;
const mongoose_1 = require("mongoose");
const dataTypes_1 = require("../util/dataTypes");
const billsSchema = new mongoose_1.Schema({
    beneficiary: { type: String, required: true },
    description: { type: String, required: true },
    type: { type: String, enum: dataTypes_1.BillType, required: true },
    paymentAmount: { type: Number, required: true },
    date: { type: Date, required: true },
});
exports.BillModel = (0, mongoose_1.model)('Bill', billsSchema);
