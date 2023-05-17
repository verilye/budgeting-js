import * as express from "express";
import db from "../startup/dbConnection";
import Category from "../models/Category";
import Goal from "../models/Goal";

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
router.get('/get-goals/:user_id', async (req, res, next) => {

    try {



        let categorySql = `SELECT * FROM Category WHERE user_id = ? ORDER BY category_id`
        const categoryResult: any = await new Promise((resolve, reject) => {
            db.query(categorySql,
                [req.params.user_id],
                function (err: any, result: any) {
                    if (err) {
                        throw err;
                    }
                    console.log("categories got");
                    resolve(result);
                }
            )
        });

        let goalSql = `SELECT * FROM Goal WHERE user_id = ? ORDER BY category_id`
        const goalResult: any = await new Promise((resolve, reject) => {
            db.query(goalSql,
                [req.params.user_id],
                function (err: any, result: any) {
                    if (err) {
                        throw err;
                    }
                    console.log("goals got");
                    resolve(result);
                });
        })

        // for each category
        //      create category if it doesnt exist
        //      add goals to array inside category
        //      return as json object

        const categories: any | [] = [];

        for (let i = 0; i < categoryResult.length; i++) {

            let category: Category = {
                category_id: categoryResult[i].category_id,
                user_id: categoryResult[i].user_id,
                goals: []
            }

            categories[i] = category;

        }


        let counter = 0;


        goalResult.forEach((element: any) => {

            while (element.category_id != categories[counter].category_id) {
                counter++;
            } 

            let goal: Goal = {
                goal_id: element.goal_id,
                target_amount: 0,
                target_progress: 0,
            }

            categories[counter].goals.push(goal);

        });

        res.send({ categories });

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

        console.log("editing income")

        const income: String = req.body.income;
        const user_id: String = req.body.income;

        let sql = `UPDATE User SET income = ? WHERE user_id = ?`;

        db.query(sql,
            [income, user_id],
            function (err: any, result: any) {
                if (err) throw err;
                console.log("income updated");
            });

        return res.sendStatus(200);

    } catch (err) {
        next(err);
    }

});

module.exports = router;