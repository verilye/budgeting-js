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

        let sql = "INSERT INTO User (user_id, password_hash, income) VALUES(?,?,?)";

        db.query(
            sql, 
            [user_id,password_hash,income],
            
            function (err:any,result:any){
                if(err) throw err;
                console.log("inserted user");
        });

        // Create default categories and goals for examples
        
    }catch(err){
        next(err);
    }

    res.sendStatus(200);
    
});

router.post('/login/:userid',(req,res,next) =>{

    try{
        const user = req.params.userid;

        db.connect();

        console.log("loggin in ... ");

        let SQL = "SELECT * FROM User WHERE user_id = (user_id) VALUES(?)";
        
        db.query(
            SQL,
            [user],
            function (err:any,result:any){
                if(err) throw err;
                console.log("inserted user");
        });

    //return JWT?
    }catch(err){
        next(err);
    }

    res.send(200);

});

module.exports = router;
  