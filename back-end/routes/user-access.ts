import * as express from "express";
import db from "../startup/dbConnection";
import { METHODS } from "http";

const {UserService} = require ('../services/user-service');
const router = express.Router();



router.post('/create-user', (req,res)=>{

    let user = "Petah";
    let pass = "Somlotomblio";
    let savings = "0.10"    

    db.connect(function(err:any){

        if(err) throw err;
        console.log("inserting data...")
        let sql = `INSERT INTO users (user_name, password_hash, total_savings) 
                VALUES(" + user + "," + pass + "," + savings + ")`;
        db.query(sql, function (err:any,result:any){
            if(err) throw err;
            console.log("inserted user");
        });

    });


    
});

module.exports = router;
  