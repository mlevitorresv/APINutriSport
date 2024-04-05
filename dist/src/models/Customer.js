"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerModel = exports.customerSchema = void 0;
const dataTypes_1 = require("../util/dataTypes");
const mongoose_1 = require("mongoose");
exports.customerSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    postalCode: { type: Number, min: 5, max: 5, required: true },
    birth: { type: Date, required: true },
    gender: { type: String, enum: dataTypes_1.GenderType, required: true },
});
exports.CustomerModel = (0, mongoose_1.model)('Customer', exports.customerSchema);
