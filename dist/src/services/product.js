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
exports.deleteProduct = exports.putProduct = exports.postProduct = exports.fetchProductsById = exports.fetchAllProducts = void 0;
const Product_1 = require("../models/Product");
const fetchAllProducts = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield Product_1.ProductModel.find();
    }
    catch (error) {
        console.error('Error, products were not obtained: ', error);
        throw error;
    }
});
exports.fetchAllProducts = fetchAllProducts;
const fetchProductsById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield Product_1.ProductModel.findById(id);
    }
    catch (error) {
        console.error('Error, product were not obtained: ', error);
        throw error;
    }
});
exports.fetchProductsById = fetchProductsById;
const postProduct = (product) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = new Product_1.ProductModel({
            name: product.name,
            description: product.description,
            SKU: product.SKU,
            brand: product.brand,
            category: product.category,
            PVP: product.PVP,
            stock: product.stock,
            photos: product.photos,
            ingredients: product.ingredients,
            energy: product.energy,
            fats: product.fats,
            carbohydrates: product.carbohydrates,
            proteins: product.proteins,
            salt: product.salt,
            weight: product.weight,
            dimensions: product.dimensions,
            instructions: product.instructions,
        });
        yield data.save();
        return { success: true, product: product };
    }
    catch (error) {
        console.error('Error, product not saved: ', error);
        throw error;
    }
});
exports.postProduct = postProduct;
const putProduct = (id, body) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield Product_1.ProductModel.findByIdAndUpdate(id, body);
    }
    catch (error) {
        console.error('Error, product not updated: ', error);
        throw error;
    }
});
exports.putProduct = putProduct;
const deleteProduct = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield Product_1.ProductModel.findByIdAndDelete(id);
    }
    catch (error) {
        console.error('Error, product not deleted: ', error);
        throw error;
    }
});
exports.deleteProduct = deleteProduct;
