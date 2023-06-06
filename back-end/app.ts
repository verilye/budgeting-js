import express, { NextFunction } from "express";
import * as dotenv from 'dotenv';
dotenv.config({path:"./db.env"});

const cors = require('cors');
const error = require("./middleware/error");
const app = express();

app.use(cors({
    origin : '*',
}));

require('./startup/routes')(app);
app.use(error);


const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`App listening on PORT ${port}`));

module.exports = app;
