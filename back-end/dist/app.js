"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const login = require("./routes/login");
var app = express_1.default();
const port = process.env.PORT || 3000;
//routes
app.use("/", login);
app.listen(port, () => console.log(`App listening on PORT ${port}`));
module.exports = app;
