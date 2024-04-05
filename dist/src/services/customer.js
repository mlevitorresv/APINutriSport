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
exports.deleteCustomer = exports.putCustomer = exports.postCustomer = exports.fetchCustomersById = exports.fetchAllCustomers = void 0;
const Customer_1 = require("../models/Customer");
const fetchAllCustomers = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield Customer_1.CustomerModel.find();
    }
    catch (error) {
        console.error('Error, customers were not obtained: ', error);
        throw error;
    }
});
exports.fetchAllCustomers = fetchAllCustomers;
const fetchCustomersById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield Customer_1.CustomerModel.findById(id);
    }
    catch (error) {
        console.error('Error, customer were not obtained: ', error);
        throw error;
    }
});
exports.fetchCustomersById = fetchCustomersById;
const postCustomer = (customer) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = new Customer_1.CustomerModel({
            name: customer.name,
            email: customer.email,
            phone: customer.phone,
            birth: customer.birth,
            gender: customer.gender,
            postalCode: customer.postalCode
        });
        yield data.save();
        return { success: true, customer: customer };
    }
    catch (error) {
        console.error('Error, customer not saved: ', error);
        throw error;
    }
});
exports.postCustomer = postCustomer;
const putCustomer = (id, body) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield Customer_1.CustomerModel.findByIdAndUpdate(id, body);
    }
    catch (error) {
        console.error('Error, customer not updated: ', error);
        throw error;
    }
});
exports.putCustomer = putCustomer;
const deleteCustomer = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield Customer_1.CustomerModel.findByIdAndDelete(id);
    }
    catch (error) {
        console.error('Error, customer not deleted: ', error);
        throw error;
    }
});
exports.deleteCustomer = deleteCustomer;
