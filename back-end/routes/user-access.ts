import * as express from "express";
import db from "../startup/dbConnection";


const router = express.Router();


// TODO
// Create user
// Register user
// Edit user information
// Return information about user
// valid login token?


router.post('/create-user', (req,res)=>{

    db.connect();
    
    console.log("inserting data...")

    let sql = `INSERT INTO users (user_name, password_hash, total_savings) 
            VALUES(" + req.body.user_id + "," + req.body.password_hash + "," + req.body.income + ")`;
    db.query(sql, function (err:any,result:any){
        if(err) throw err;
        console.log("inserted user");
    });
    
});

router.post('/login',(req,res) =>{

    // TODO
    // Check the request body to see if it matches the db entries
    // Positive response if yes, negative if no

});

module.exports = router;
  