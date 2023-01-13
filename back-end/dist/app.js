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

 

//TODO
// clean up typescript transpilation
// setup node server into more readable patterns
// connect up to front
// remove deleted files from github