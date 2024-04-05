"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModel = exports.productSchema = void 0;
const dataTypes_1 = require("../util/dataTypes");
const mongoose_1 = require("mongoose");
exports.productSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    SKU: { type: String, required: true },
    brand: { type: String, required: true },
    category: { type: String, enum: dataTypes_1.ProductTypes, required: true },
    PVP: { type: Number, required: true },
    stock: { type: Number, required: true },
    photos: {
        type: [
            {
                type: String,
                required: true
            }
        ],
        validate: {
            validator: function (v) {
                return v.length === 3;
            },
            message: 'La longitud de `photos` debe ser de exactamente 3 elementos.'
        }
    },
    ingredients: { type: String, required: true },
    energy: { type: Number, required: true },
    fats: { type: Number, required: true },
    carbohydrates: { type: Number, required: true },
    proteins: { type: Number, required: true },
    salt: { type: Number, required: true },
    weight: { type: Number, required: true },
    dimensions: { type: String, required: true },
    instructions: { type: String, required: true },
});
exports.ProductModel = (0, mongoose_1.model)('Product', exports.productSchema);
