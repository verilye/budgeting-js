import express from "express";

var app = express();

app.get('/', (req,res)=>{

  res.send("Whoopsie daisy, you got a mardi gras bean");

});


const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`App listening on PORT ${port}`));



module.exports = app;
