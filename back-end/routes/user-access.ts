import * as express from "express";
import db from "../startup/dbConnection";


const router = express.Router();


// /user-access/create-user

router.post('/create-user', (req,res)=>{

    let user = "Petah";
    let pass = "Somlotomblio";
    let savings = "0.10"    

    db.connect();
    
    console.log("inserting data...")

    let sql = `INSERT INTO users (user_name, password_hash, total_savings) 
            VALUES(" + user + "," + pass + "," + savings + ")`;
    db.query(sql, function (err:any,result:any){
        if(err) throw err;
        console.log("inserted user");
    });
    
});

module.exports = router;
  