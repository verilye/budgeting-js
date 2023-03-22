import * as express from "express";
import db from "../startup/dbConnection";

const router = express.Router();

router.post('/create-category', (req,res,next)=>{

    try{

        // Map variables from request to SQL command
        db.connect();
    
        console.log("creating category...")
    
        let sql = `INSERT INTO category (user_id, category_id) 
                VALUES(" + req.body.user_id + "," + req.body.category_id ")`; 
        db.query(sql, function (err:any,result:any){
            if(err) throw err;
            console.log("inserted category");
        });
 

    }catch(err){
        next(err);
    }

});

router.get('/get-categories', (req,res,next)=>{

    try{

        
        
        // all categories in an array, with goals inside the categories

    }catch(err){
        next(err);
    }

});

router.post('/create-goal', (req,res,next)=>{

    try{

        


    }catch(err){
        next(err);
    }

});

module.exports = router;