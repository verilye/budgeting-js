import * as express from "express";
import db from "../startup/dbConnection";

const router = express.Router();

router.post('/create-category', (req,res,next)=>{

    try{

        // Map variables from request to SQL command
    
        console.log("creating category...") 

        const user_id :String = req.body.user_id;
        const category_id : String = req.body.category_id;
    
        let sql = "INSERT INTO Category (user_id, category_id) VALUES(?,?)";
        db.query(
            sql, 
            [user_id, category_id],
            function (err:any,result:any){
            if(err) throw err;
            console.log("inserted category");
            
        });

        return res.sendStatus(200);

    }catch(err){
        next(err);
    }

});


// Should return all categories and goals for user
router.get('/get-categories', (req,res,next)=>{

    try{        
        // all categories in an array, with goals inside the categories 
    
        console.log("getting categories...")
    
        let sql = `SELECT * FROM Category`
            
        db.query(sql, function (err:any,result:any){
            if(err) throw err;
            console.log("inserted category");
        });
 

        return res.sendStatus(200);

    }catch(err){
        next(err);
    }

});


//Should allow the user to edit goal income
router.post('/edit-goal', (req,res,next)=>{

    try{

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

router.post('/add-income',(req,res,next)=>{
    

    // TODO 
    // TEST MEEEE

    try{

        const income: String  = req.body.income;
        const user_id: String = req.body.income;

        let sql = `UPDATE User SET income = ? WHERE user_id = ?`;
            
        db.query(sql, 
            [income,user_id],
            function (err:any,result:any){
            if(err) throw err;
            console.log("inserted category");
        });

        return res.sendStatus(200);

    }catch(err){
        next(err);
    }

});

module.exports = router;