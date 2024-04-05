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
exports.deleteEmployee = exports.putEmployee = exports.postEmployee = exports.fetchEmployeesById = exports.fetchAllEmployees = void 0;
const Employee_1 = require("../models/Employee");
const bcryptjs = require('bcryptjs');
const saltRounds = 10;
const fetchAllEmployees = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield Employee_1.EmployeeModel.find();
    }
    catch (error) {
        console.error('Error, employees were not obtained: ', error);
        throw error;
    }
});
exports.fetchAllEmployees = fetchAllEmployees;
const fetchEmployeesById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield Employee_1.EmployeeModel.findById(id);
    }
    catch (error) {
        console.error('Error, employee were not obtained: ', error);
        throw error;
    }
});
exports.fetchEmployeesById = fetchEmployeesById;
const postEmployee = (employee) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const salt = yield bcryptjs.genSalt(saltRounds);
        const hashedPassword = yield bcryptjs.hash(employee.password, salt);
        const data = new Employee_1.EmployeeModel({
            photo: employee.photo,
            DNI: employee.DNI,
            active: employee.active,
            address: employee.address,
            bankAccount: employee.bankAccount,
            birth: employee.birth,
            contract: employee.contract,
            email: employee.email,
            gender: employee.gender,
            job: employee.job,
            name: employee.name,
            password: hashedPassword, // Recuerda que para una aplicación real, deberías guardar la contraseña de forma segura, como un hash
            phone: employee.phone,
            postalCode: employee.postalCode,
            socialSecurity: employee.socialSecurity,
            startDate: employee.startDate
        });
        yield data.save();
        return { success: true, employee: employee };
    }
    catch (error) {
        console.error('Error, employee not saved: ', error);
        throw error;
    }
});
exports.postEmployee = postEmployee;
const putEmployee = (id, body) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield Employee_1.EmployeeModel.findByIdAndUpdate(id, body);
    }
    catch (error) {
        console.error('Error, employee not updated: ', error);
        throw error;
    }
});
exports.putEmployee = putEmployee;
const deleteEmployee = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield Employee_1.EmployeeModel.findByIdAndDelete(id);
    }
    catch (error) {
        console.error('Error, employee not deleted: ', error);
        throw error;
    }
});
exports.deleteEmployee = deleteEmployee;
