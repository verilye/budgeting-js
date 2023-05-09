import * as express from "express";
import db from "../startup/dbConnection";

const router = express.Router();

router.post('/create-category', (req, res, next) => {

    try {

        // Map variables from request to SQL command

        console.log("creating category...")

        const user_id: String = req.body.user_id;
        const category_id: String = req.body.category_id;

        let sql = "INSERT INTO Category (user_id, category_id) VALUES(?,?)";
        db.query(
            sql,
            [user_id, category_id],
            function (err: any, result: any) {
                if (err) throw err;
                console.log("inserted category");

            });

        return res.sendStatus(200);

    } catch (err) {
        next(err);
    }

});


// Should return all categories and goals for user
router.get('/get-goals', (req, res, next) => {


    // The aim here is to use node-fu to return neat little objects
    // back to the end user for consumption

    // Pull all categories, build objects
    // const categoryArr = [...categorySqlResult];
    // for(; i< categoryArr; i++){
    //      new Category(categoryArr[i]);
    // }


    // If I use a map, then I dont need to query for categories

    // Pull all goals with category_id into these objects
    // i =0;
    // for(;i<goalSqlResult;i++){
    //      map.add[goalSqlResult.key, goal];
    // }
    
    // for(map.size())
    // {
    //     if(!category){new Category(map.key);}
    //     category.append()
    // }
    // return JSON
    


    


    try {

        console.log("getting categories and goals...")

        let sql = `SELECT * FROM Goal WHERE (user_id)`

        db.query(sql, function (err: any, result: any) {
            if (err) throw err;
            console.log("inserted category");
        });


        return res.sendStatus(200);

    } catch (err) {
        next(err);
    }

});


//Should allow the user to edit goal income
router.post('/edit-goal', (req, res, next) => {

    try {

    } catch (err) {
        next(err);
    }
});

router.post('/create-goal', (req, res, next) => {

    try {

        console.log("creating goal...")

        const user_id: String = req.body.user_id;
        const category_id: String = req.body.category_id
        const goal_id: String = req.body.goal_id;

        let sql = "INSERT INTO Goal (user_id, category_id, goal_id) VALUES(?,?,?)";
        db.query(
            sql,
            [user_id, category_id, goal_id],
            function (err: any, result: any) {
                if (err) throw err;
                console.log("inserted goal");

            });

        return res.sendStatus(200);

    } catch (err) {
        next(err);
    }
});

router.post('/edit-income', (req, res, next) => {

    try {

        const income: String = req.body.income;
        const user_id: String = req.body.income;

        let sql = `UPDATE User SET income = ? WHERE user_id = ?`;

        db.query(sql,
            [income, user_id],
            function (err: any, result: any) {
                if (err) throw err;
                console.log("inserted category");
            });

        return res.sendStatus(200);

    } catch (err) {
        next(err);
    }

});

module.exports = router;