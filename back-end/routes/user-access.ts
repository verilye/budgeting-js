import * as express from "express";
import db from "../startup/dbConnection";
import User from "../models/user";

const mysql = require('mysql');
const jwt = require('jsonwebtoken');

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

router.post('/login',async (req,res,next) =>{


    try{

        const user_id:String = req.body.user_id;
    
        db.connect(function(err:any){
            if(err) throw err;

            console.log("logging in ... ");
        
            db.query('SELECT * FROM user WHERE user_id = ?',[user_id], 
            function(err:any,result:any){
                if(err) throw err;
                console.log(result);
            });
        });

        
        res.sendStatus(200);

    // generate JWT

    // const token = jwt.sign({user:});

    // check for JWT in postman

    // return jwt


    }catch(err){
        next(err);
    }


    
    

});

module.exports = router;
  