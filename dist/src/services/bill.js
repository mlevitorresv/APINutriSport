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
exports.deleteBill = exports.putBill = exports.postBill = exports.fetchBillsById = exports.fetchAllBills = void 0;
const Bill_1 = require("../models/Bill");
const fetchAllBills = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield Bill_1.BillModel.find();
    }
    catch (error) {
        console.error('Error, bills were not obtained: ', error);
        throw error;
    }
});
exports.fetchAllBills = fetchAllBills;
const fetchBillsById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield Bill_1.BillModel.findById(id);
    }
    catch (error) {
        console.error('Error, bill were not obtained: ', error);
        throw error;
    }
});
exports.fetchBillsById = fetchBillsById;
const postBill = (bill) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = new Bill_1.BillModel({
            beneficiary: bill.beneficiary,
            description: bill.description,
            type: bill.type,
            paymentAmount: bill.paymentAmount,
            date: bill.date
        });
        yield data.save();
        return { success: true, bill: bill };
    }
    catch (error) {
        console.error('Error, bill not saved: ', error);
        throw error;
    }
});
exports.postBill = postBill;
const putBill = (id, body) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield Bill_1.BillModel.findByIdAndUpdate(id, body);
    }
    catch (error) {
        console.error('Error, bill not updated: ', error);
        throw error;
    }
});
exports.putBill = putBill;
const deleteBill = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield Bill_1.BillModel.findByIdAndDelete(id);
    }
    catch (error) {
        console.error('Error, bill not deleted: ', error);
        throw error;
    }
});
exports.deleteBill = deleteBill;
