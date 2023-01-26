"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
require('./startup/dbConnection')();
require('./startup/routes')(app);
// TODO 
// Figure out the ts file
// GET RID OF FIREBASE, NOSQL IS NOT A WIDELY SOUGHT AFTER SKILL
// !!! MYSQL !!!
// USE AN AZURE OR AMAZON INSTANCE, DONT BE A SILLY BOY
// set up mysql on azure data studio
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`App listening on PORT ${port}`));
module.exports = app;
