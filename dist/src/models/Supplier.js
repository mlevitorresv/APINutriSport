"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupplierModel = exports.supplierSchema = void 0;
const mongoose_1 = require("mongoose");
const dataTypes_1 = require("../util/dataTypes");
exports.supplierSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    postalCode: { type: String, min: 5, max: 5, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    web: { type: String, required: true },
    category: { type: String, enum: dataTypes_1.CategoriesSuppliersTypes, required: true },
});
exports.SupplierModel = (0, mongoose_1.model)('Supplier', exports.supplierSchema);
