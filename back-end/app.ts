import express from "express";
const login = require("./routes/login");

var app = express();
const port = process.env.PORT || 3000;

const db = require("./services/firestoreConnection");


//routes
app.use("/", login);


// TODO GET RID OF FIREBASE, NOSQL IS NOT A WIDELY SOUGHT AFTER SKILL
// !!! MYSQL !!!
// USE AN AZURE OR AMAZON INSTANCE, DONT BE A SILLY BOY


app.listen(port, () => console.log(`App listening on PORT ${port}`));



module.exports = app;
