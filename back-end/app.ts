import express, { NextFunction } from "express";
import * as dotenv from 'dotenv';
dotenv.config({path:"./db.env"});

const cors = require('cors');

const error = require("./middleware/error");

const app = express();

app.use(cors({
    origin : '*',
}));


// NOTE
// In routes include next in the parameters (req,res,next)
// catch errors using catch{ next(err); }
// This function is passed after every route on error

require('./startup/routes')(app);


app.use(error);


const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`App listening on PORT ${port}`));

module.exports = app;
