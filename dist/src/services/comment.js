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
exports.deleteComment = exports.putComment = exports.postComment = exports.fetchCommentsById = exports.fetchAllComments = void 0;
const Comment_1 = require("../models/Comment");
const fetchAllComments = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield Comment_1.CommentModel.find();
    }
    catch (error) {
        console.error('Error, comments were not obtained: ', error);
        throw error;
    }
});
exports.fetchAllComments = fetchAllComments;
const fetchCommentsById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield Comment_1.CommentModel.findById(id);
    }
    catch (error) {
        console.error('Error, comment were not obtained: ', error);
        throw error;
    }
});
exports.fetchCommentsById = fetchCommentsById;
const postComment = (comment) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = new Comment_1.CommentModel({
            name: comment.name,
            email: comment.email,
            comment: comment.comment,
            date: comment.date,
        });
        yield data.save();
        return { success: true, comment: data };
    }
    catch (error) {
        console.error('Error, comment not saved: ', error);
        throw error;
    }
});
exports.postComment = postComment;
const putComment = (id, body) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield Comment_1.CommentModel.findByIdAndUpdate(id, body);
    }
    catch (error) {
        console.error('Error, comment not updated: ', error);
        throw error;
    }
});
exports.putComment = putComment;
const deleteComment = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield Comment_1.CommentModel.findByIdAndDelete(id);
    }
    catch (error) {
        console.error('Error, comment not deleted: ', error);
        throw error;
    }
});
exports.deleteComment = deleteComment;
