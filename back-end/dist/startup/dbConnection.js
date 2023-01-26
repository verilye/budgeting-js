"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql = require('mysql');
const connection = mysql.createConnection({
    connectionLimit: process.env.DB_CONLIMIT,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});
exports.default = connection;
