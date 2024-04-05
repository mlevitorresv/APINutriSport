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
exports.commentRouter = void 0;
const express_1 = __importDefault(require("express"));
const comment_1 = require("../services/comment");
exports.commentRouter = express_1.default.Router();
exports.commentRouter.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allComments = yield (0, comment_1.fetchAllComments)();
        res.json({ comments: allComments });
    }
    catch (error) {
        console.error('Error getting the ccmments: ', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}));
exports.commentRouter.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const comment = yield (0, comment_1.fetchCommentsById)(id);
        res.json({ comment: comment });
    }
    catch (error) {
        console.error('Error getting the comment: ', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}));
exports.commentRouter.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, comment_1.postComment)(req.body);
        res.json(result);
    }
    catch (error) {
        console.error('Error saving the comment: ', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}));
exports.commentRouter.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const result = yield (0, comment_1.putComment)(id, req.body);
        res.json(result);
    }
    catch (error) {
        console.error('Error updating the comment: ', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}));
exports.commentRouter.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const result = yield (0, comment_1.deleteComment)(id);
        res.json(result);
    }
    catch (error) {
        console.error('Error deleting the comment: ', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}));
