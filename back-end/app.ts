import express from "express";
const app = express();

require('./startup/routes')(app);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`App listening on PORT ${port}`));



module.exports = app;
