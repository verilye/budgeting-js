import * as express from "express";
import { METHODS } from "http";

const {UserService} = require ('../services/user-service');

const router = express.Router();



router.post('/', (req,res)=>{

    //Send user to db, check to see if it matches with the password hash
    //send positive response to client side 
    try{

        UserService.getUser();

    }catch{

    }
});

module.exports = router;
  