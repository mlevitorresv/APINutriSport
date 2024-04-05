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
exports.saleRouter = void 0;
const express_1 = __importDefault(require("express"));
const sale_1 = require("../services/sale");
exports.saleRouter = express_1.default.Router();
exports.saleRouter.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allSales = yield (0, sale_1.fetchAllSales)();
        res.json({ sales: allSales });
    }
    catch (error) {
        console.error('Error getting the sales: ', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}));
exports.saleRouter.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const sale = yield (0, sale_1.fetchSalesById)(id);
        res.json({ sales: sale });
    }
    catch (error) {
        console.error('Error getting the sale: ', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}));
exports.saleRouter.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, sale_1.postSale)(req.body);
        res.json(result);
    }
    catch (error) {
        console.error('Error saving the sale: ', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}));
exports.saleRouter.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const result = yield (0, sale_1.putSale)(id, req.body);
        res.json(result);
    }
    catch (error) {
        console.error('Error updating the sale: ', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}));
exports.saleRouter.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const result = yield (0, sale_1.deleteSale)(id);
        res.json(result);
    }
    catch (error) {
        console.error('Error deleting the sale: ', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}));
