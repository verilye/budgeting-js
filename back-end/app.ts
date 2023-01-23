import express from "express";
const app = express();

require('./startup/dbConnection')();
require('./startup/routes')(app);



// TODO 
// Figure out the ts file
// GET RID OF FIREBASE, NOSQL IS NOT A WIDELY SOUGHT AFTER SKILL
// !!! MYSQL !!!
// USE AN AZURE OR AMAZON INSTANCE, DONT BE A SILLY BOY

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`App listening on PORT ${port}`));



module.exports = app;
