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
exports.deleteSale = exports.putSale = exports.postSale = exports.fetchSalesById = exports.fetchAllSales = void 0;
const Sale_1 = require("../models/Sale");
const fetchAllSales = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield Sale_1.SaleModel.find();
    }
    catch (error) {
        console.error('Error, sales were not obtained: ', error);
        throw error;
    }
});
exports.fetchAllSales = fetchAllSales;
const fetchSalesById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield Sale_1.SaleModel.findById(id);
    }
    catch (error) {
        console.error('Error, sale were not obtained: ', error);
        throw error;
    }
});
exports.fetchSalesById = fetchSalesById;
const postSale = (sale) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = new Sale_1.SaleModel({
            customer: sale.customer,
            employee: sale.employee,
            date: sale.date,
            invoiceNumber: sale.invoiceNumber,
            payMethod: sale.payMethod
        });
        yield data.save();
        return { success: true, sale: sale };
    }
    catch (error) {
        console.error('Error, sale not saved: ', error);
        throw error;
    }
});
exports.postSale = postSale;
const putSale = (id, body) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield Sale_1.SaleModel.findByIdAndUpdate(id, body);
    }
    catch (error) {
        console.error('Error, sale not updated: ', error);
        throw error;
    }
});
exports.putSale = putSale;
const deleteSale = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield Sale_1.SaleModel.findByIdAndDelete(id);
    }
    catch (error) {
        console.error('Error, sale not deleted: ', error);
        throw error;
    }
});
exports.deleteSale = deleteSale;
