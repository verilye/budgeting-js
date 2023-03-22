"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = __importStar(require("express"));
const dbConnection_1 = __importDefault(require("../startup/dbConnection"));
const router = express.Router();
router.post('/create-category', (req, res, next) => {
    try {
        // Map variables from request to SQL command
        dbConnection_1.default.connect();
        console.log("creating category...");
        let sql = `INSERT INTO category (user_id, category_id) 
                VALUES(" + req.body.user_id + "," + req.body.category_id ")`;
        dbConnection_1.default.query(sql, function (err, result) {
            if (err)
                throw err;
            console.log("inserted category");
        });
    }
    catch (err) {
        next(err);
    }
});
router.get('/get-categories', (req, res, next) => {
    try {
        // all categories in an array, with goals inside the categories
    }
    catch (err) {
        next(err);
    }
});
router.post('/create-goal', (req, res, next) => {
    try {
    }
    catch (err) {
        next(err);
    }
});
module.exports = router;
