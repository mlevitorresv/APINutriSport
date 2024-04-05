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
exports.customerRouter = void 0;
const express_1 = __importDefault(require("express"));
const customer_1 = require("../services/customer");
exports.customerRouter = express_1.default.Router();
exports.customerRouter.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allCustomers = yield (0, customer_1.fetchAllCustomers)();
        res.json({ customers: allCustomers });
    }
    catch (error) {
        console.error('Error getting the customers: ', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}));
exports.customerRouter.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const customer = yield (0, customer_1.fetchCustomersById)(id);
        res.json({ customers: customer });
    }
    catch (error) {
        console.error('Error getting the customer: ', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}));
exports.customerRouter.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, customer_1.postCustomer)(req.body);
        res.json(result);
    }
    catch (error) {
        console.error('Error saving the customer: ', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}));
exports.customerRouter.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const result = yield (0, customer_1.putCustomer)(id, req.body);
        res.json(result);
    }
    catch (error) {
        console.error('Error updating the customer: ', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}));
exports.customerRouter.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const result = yield (0, customer_1.deleteCustomer)(id);
        res.json(result);
    }
    catch (error) {
        console.error('Error deleting the customer: ', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}));
