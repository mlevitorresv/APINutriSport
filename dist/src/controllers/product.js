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
exports.productRouter = void 0;
const express_1 = __importDefault(require("express"));
const product_1 = require("../services/product");
exports.productRouter = express_1.default.Router();
exports.productRouter.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allProducts = yield (0, product_1.fetchAllProducts)();
        res.json({ products: allProducts });
    }
    catch (error) {
        console.error('Error getting the products: ', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}));
exports.productRouter.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const product = yield (0, product_1.fetchProductsById)(id);
        res.json({ products: product });
    }
    catch (error) {
        console.error('Error getting the product: ', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}));
exports.productRouter.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, product_1.postProduct)(req.body);
        res.json(result);
    }
    catch (error) {
        console.error('Error saving the product: ', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}));
exports.productRouter.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const result = yield (0, product_1.putProduct)(id, req.body);
        res.json(result);
    }
    catch (error) {
        console.error('Error updating the product: ', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}));
exports.productRouter.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const result = yield (0, product_1.deleteProduct)(id);
        res.json(result);
    }
    catch (error) {
        console.error('Error deleting the product: ', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}));
