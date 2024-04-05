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
exports.supplierRouter = void 0;
const express_1 = __importDefault(require("express"));
const supplier_1 = require("../services/supplier");
exports.supplierRouter = express_1.default.Router();
exports.supplierRouter.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allSuppliers = yield (0, supplier_1.fetchAllSuppliers)();
        res.json({ suppliers: allSuppliers });
    }
    catch (error) {
        console.error('Error getting the suppliers: ', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}));
exports.supplierRouter.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const supplier = yield (0, supplier_1.fetchSuppliersById)(id);
        res.json({ suppliers: supplier });
    }
    catch (error) {
        console.error('Error getting the supplier: ', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}));
exports.supplierRouter.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, supplier_1.postSupplier)(req.body);
        res.json(result);
    }
    catch (error) {
        console.error('Error saving the supplier: ', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}));
exports.supplierRouter.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const result = yield (0, supplier_1.putSupplier)(id, req.body);
        res.json(result);
    }
    catch (error) {
        console.error('Error updating the supplier: ', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}));
exports.supplierRouter.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const result = yield (0, supplier_1.deleteSupplier)(id);
        res.json(result);
    }
    catch (error) {
        console.error('Error deleting the supplier: ', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}));
