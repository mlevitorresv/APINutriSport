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
exports.deleteSupplier = exports.putSupplier = exports.postSupplier = exports.fetchSuppliersById = exports.fetchAllSuppliers = void 0;
const Supplier_1 = require("../models/Supplier");
const fetchAllSuppliers = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield Supplier_1.SupplierModel.find();
    }
    catch (error) {
        console.error('Error, suppliers were not obtained: ', error);
        throw error;
    }
});
exports.fetchAllSuppliers = fetchAllSuppliers;
const fetchSuppliersById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield Supplier_1.SupplierModel.findById(id);
    }
    catch (error) {
        console.error('Error, supplier were not obtained: ', error);
        throw error;
    }
});
exports.fetchSuppliersById = fetchSuppliersById;
const postSupplier = (supplier) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = new Supplier_1.SupplierModel({
            category: supplier.category,
            email: supplier.email,
            name: supplier.name,
            phone: supplier.phone,
            postalCode: supplier.postalCode,
            web: supplier.web
        });
        yield data.save();
        return { success: true, supplier: supplier };
    }
    catch (error) {
        console.error('Error, supplier not saved: ', error);
        throw error;
    }
});
exports.postSupplier = postSupplier;
const putSupplier = (id, body) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield Supplier_1.SupplierModel.findByIdAndUpdate(id, body);
    }
    catch (error) {
        console.error('Error, supplier not updated: ', error);
        throw error;
    }
});
exports.putSupplier = putSupplier;
const deleteSupplier = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield Supplier_1.SupplierModel.findByIdAndDelete(id);
    }
    catch (error) {
        console.error('Error, supplier not deleted: ', error);
        throw error;
    }
});
exports.deleteSupplier = deleteSupplier;
