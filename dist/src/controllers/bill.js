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
exports.billRouter = void 0;
const express_1 = __importDefault(require("express"));
const bill_1 = require("../services/bill");
exports.billRouter = express_1.default.Router();
exports.billRouter.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allBills = yield (0, bill_1.fetchAllBills)();
        res.json({ bills: allBills });
    }
    catch (error) {
        console.error('Error getting the bills: ', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}));
exports.billRouter.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const bill = yield (0, bill_1.fetchBillsById)(id);
        res.json({ bills: bill });
    }
    catch (error) {
        console.error('Error getting the bill: ', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}));
exports.billRouter.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, bill_1.postBill)(req.body);
        res.json(result);
    }
    catch (error) {
        console.error('Error saving the bill: ', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}));
exports.billRouter.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const result = yield (0, bill_1.putBill)(id, req.body);
        res.json(result);
    }
    catch (error) {
        console.error('Error updating the bill: ', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}));
exports.billRouter.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const result = yield (0, bill_1.deleteBill)(id);
        res.json(result);
    }
    catch (error) {
        console.error('Error deleting the bill: ', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}));
