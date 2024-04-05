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
exports.employeeRouter = void 0;
const express_1 = __importDefault(require("express"));
const employee_1 = require("../services/employee");
exports.employeeRouter = express_1.default.Router();
exports.employeeRouter.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allEmployees = yield (0, employee_1.fetchAllEmployees)();
        res.json({ employees: allEmployees });
    }
    catch (error) {
        console.error('Error getting the employees: ', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}));
exports.employeeRouter.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const employee = yield (0, employee_1.fetchEmployeesById)(id);
        res.json({ employees: employee });
    }
    catch (error) {
        console.error('Error getting the employee: ', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}));
exports.employeeRouter.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, employee_1.postEmployee)(req.body);
        res.json(result);
    }
    catch (error) {
        console.error('Error saving the employee: ', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}));
exports.employeeRouter.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const result = yield (0, employee_1.putEmployee)(id, req.body);
        res.json(result);
    }
    catch (error) {
        console.error('Error updating the employee: ', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}));
exports.employeeRouter.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const result = yield (0, employee_1.deleteEmployee)(id);
        res.json(result);
    }
    catch (error) {
        console.error('Error deleting the employee: ', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}));
