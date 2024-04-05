"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeModel = exports.employeeSchema = void 0;
const dataTypes_1 = require("../util/dataTypes");
const mongoose_1 = require("mongoose");
exports.employeeSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    birth: { type: Date, required: true },
    gender: { type: String, enum: dataTypes_1.GenderType, required: true },
    DNI: { type: String, min: 9, max: 12, required: true },
    email: { type: String, required: true },
    password: { type: String, min: 9, required: true },
    phone: { type: String, required: true },
    postalCode: { type: String, min: 5, max: 5, required: true },
    address: { type: String, required: true },
    job: { type: String, required: true },
    startDate: { type: Date, required: true },
    contract: { type: String, enum: dataTypes_1.ContractTypes, required: true },
    active: { type: Boolean, required: true },
    socialSecurity: { type: String, min: 12, max: 12, required: true },
    bankAccount: { type: String, required: true },
});
exports.EmployeeModel = (0, mongoose_1.model)('Employee', exports.employeeSchema);
