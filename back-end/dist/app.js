"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const error = require("./middleware/error");
const app = (0, express_1.default)();
// NOTE
// In routes include next in the parameters (req,res,next)
// catch errors using catch{ next(err); }
// This function is passed after every route on error
require('./startup/routes')(app);
app.use(error);
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`App listening on PORT ${port}`));
module.exports = app;
