"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Business = void 0;
const mongoose_1 = require("mongoose");
const businessSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    owner: { type: mongoose_1.Types.ObjectId, ref: "User", required: true },
    subscribers: [{ type: mongoose_1.Types.ObjectId, ref: "User" }],
    reviews: [
        {
            userId: { type: mongoose_1.Types.ObjectId, ref: "User", required: true },
            comment: { type: String, required: true },
            createdAt: { type: Date, default: Date.now },
        },
    ],
}, { timestamps: true });
exports.Business = (0, mongoose_1.model)("Business", businessSchema);
