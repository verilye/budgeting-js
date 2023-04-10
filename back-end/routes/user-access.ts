import * as express from "express";
import db from "../startup/dbConnection";
import { error } from "console";


const mysql = require('mysql');
const fs = require('fs');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const router = express.Router();

router.post('/create-user', (req,res, next)=>{

    try{

        const user_id:String = req.body.user_id;
        const password:String = req.body.password;        

        db.connect();
        console.log("inserting data...")

        // Check for existing user
        let userCheck = "SELECT * FROM USER WHERE user_id = ?";

        db.query(
            userCheck,
            [user_id],
            function(err:Error, result:any){
                if(err) throw err;
                if(result.length > 0){ throw Error("User already exists!")};
            }
        )

        // Hash user details

        const password_salt:String = bcrypt.genSaltSync(10);
        const password_hash:String  = bcrypt.hashSync(password, password_salt);

        //Insert query
        let sql = "INSERT INTO User (user_id, password_hash, password_salt, income) VALUES(?,?,?,?)";
        db.query(
            sql, 
            [user_id,password_hash,password_salt,0],
            
            function (err:Error,result:any){
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
        const password:String  = req.body.password;
    
        db.connect(async function(err:any){
            if(err) throw err;

            console.log("logging in ... ");
        
            const result:any = await db.query('SELECT * FROM user WHERE user_id = ?',[user_id], 
            function(err:any,result:any){
                if(err) throw err;
                

                // TODO
                // READ THIS!!
                // Should shed some light on what the correct implementation is
                // https://stackoverflow.com/questions/65092710/sending-a-plain-text-password-to-nodejs-express-server-am-i-overthinking-passwo
                
                // https://siddharthac6.medium.com/json-web-token-jwt-the-right-way-of-implementing-with-node-js-65b8915d550es

                //Check user name match with the db entry
                if(result[0].length === 0) throw Error("User does not exist");

                //Check password matches with hash when salted using stored
                const salt = result[0].password_salt;
                const password_hash = bcrypt.hashSync(password, salt);

                if(password_hash != result[0].password_hash) throw Error("Incorrect Password");

                // generate JWT

                const privateKey:string = fs.readFileSync(__dirname+ '/../private.key', 'utf8');
                const token:string = jwt.sign({user:result[0].user_id}, privateKey, {algorithm:"RS256", allowInsecureKeySizes:true});
  
                // return jwt

                console.log("logged in");

                res.send({token});
            });

        });

    }catch(err){
        next(err);
    }


    
    

});

module.exports = router;
  