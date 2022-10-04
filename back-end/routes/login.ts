import * as express from "express";
const router = express.Router();

router.get('/', (req,res)=>{

    res.send("Whoopsie daisy, you got a mardi gras bean");
  
});

module.exports = router;
  