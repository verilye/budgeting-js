import express, { NextFunction } from "express";

const error = require("./middleware/error");

const app = express();


// NOTE
// In routes include next in the parameters (req,res,next)
// catch errors using catch{ next(err); }
// This function is passed after every route on error

require('./startup/routes')(app);


app.use(error);


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`App listening on PORT ${port}`));

module.exports = app;
