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
const { UserService } = require('../services/user-service');
const router = express.Router();
router.post('/create-user', (req, res) => {
    let user = "Petah";
    let pass = "Somlotomblio";
    let savings = "0.10";
    dbConnection_1.default.connect(function (err) {
        if (err)
            throw err;
        console.log("inserting data...");
        let sql = `INSERT INTO users (user_name, password_hash, total_savings) 
                VALUES(" + user + "," + pass + "," + savings + ")`;
        dbConnection_1.default.query(sql, function (err, result) {
            if (err)
                throw err;
            console.log("inserted user");
        });
    });
});
module.exports = router;
