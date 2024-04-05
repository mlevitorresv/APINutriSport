"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillType = exports.CategoriesSuppliersTypes = exports.PayTypes = exports.ProductTypes = exports.ContractTypes = exports.GenderType = void 0;
var GenderType;
(function (GenderType) {
    GenderType["Male"] = "male";
    GenderType["Female"] = "female";
    GenderType["Other"] = "other";
})(GenderType || (exports.GenderType = GenderType = {}));
var ContractTypes;
(function (ContractTypes) {
    ContractTypes["Partner"] = "partner";
    ContractTypes["UndefinedTime"] = "undefinedTime";
    ContractTypes["CertainTime"] = "certainTime";
})(ContractTypes || (exports.ContractTypes = ContractTypes = {}));
var ProductTypes;
(function (ProductTypes) {
    ProductTypes["Accessories"] = "accessories";
    ProductTypes["PreWorkouts"] = "preWorkouts";
    ProductTypes["Protein"] = "protein";
    ProductTypes["Creatine"] = "creatine";
    ProductTypes["IntraWorkouts"] = "intraWorkouts";
    ProductTypes["Other"] = "other";
})(ProductTypes || (exports.ProductTypes = ProductTypes = {}));
var PayTypes;
(function (PayTypes) {
    PayTypes["CreditCard"] = "creditCard";
    PayTypes["Cash"] = "cash";
})(PayTypes || (exports.PayTypes = PayTypes = {}));
var CategoriesSuppliersTypes;
(function (CategoriesSuppliersTypes) {
    CategoriesSuppliersTypes["Products"] = "products";
    CategoriesSuppliersTypes["Rent"] = "rent";
})(CategoriesSuppliersTypes || (exports.CategoriesSuppliersTypes = CategoriesSuppliersTypes = {}));
var BillType;
(function (BillType) {
    BillType["Compra"] = "compra";
    BillType["Alquiler"] = "alquiler";
    BillType["N\u00F3mina"] = "n\u00F3mina";
})(BillType || (exports.BillType = BillType = {}));
