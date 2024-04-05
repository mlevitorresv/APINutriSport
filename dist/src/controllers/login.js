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
exports.loginRouter = void 0;
const express_1 = __importDefault(require("express"));
const login_1 = require("../services/login");
const bcrypt = require('bcrypt');
const dotenv_1 = __importDefault(require("dotenv"));
const Employee_1 = require("../models/Employee");
dotenv_1.default.config();
exports.loginRouter = express_1.default.Router();
exports.loginRouter.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const data = yield Employee_1.EmployeeModel.findOne({ email: email });
    if (!data)
        return res.status(401).json({ error: "Unauthorized: Invalid credentials" });
    yield bcrypt.compare(password, data.password, (err, result) => {
        if (err)
            return err;
        if (!result)
            return res.status(401).json({ error: "Unauthorized: Invalid credentials" });
        const userToken = (0, login_1.generateToken)(email);
        if (userToken)
            return res.json({ token: userToken });
        return res.status(500).json({ error: "Token was not generated, internal error" });
    });
}));
