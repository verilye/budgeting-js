import * as express from "express";
import db from "../startup/dbConnection";

const router = express.Router();

router.post('/create-user', (req,res, next)=>{

    try{

        const user_id:String = req.body.user_id;
        const password_hash:String  = req.body.password_hash;
        const income:number = req.body.income;

        db.connect();
        
        console.log("inserting data...")

        let sql = `INSERT INTO users (user_id, password_hash, income) 
                VALUES(" + user_id + "," + password_hash + "," + income + ")`;
        db.query(sql, function (err:any,result:any){
            if(err) throw err;
            console.log("inserted user");
        });
        
    }catch(err){
        next(err);
    }
    
});

router.post('/login',(req,res) =>{

    // TODO
    // Check the request body to see if it matches the db entries
    // Positive response if yes, negative if no

});

module.exports = router;
  