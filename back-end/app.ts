import express from "express";
const login = require("./routes/login");

var app = express();
const port = process.env.PORT || 3000;


//routes
app.use("/", login);



app.listen(port, () => console.log(`App listening on PORT ${port}`));



module.exports = app;
