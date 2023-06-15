import * as express from "express";
import db from "../startup/dbConnection";
import Category from "../models/Category";
import Goal from "../models/Goal";

const fs = require('fs');
const jwt = require('jsonwebtoken');
const router = express.Router();


// Authorise here, then allow the user to access the user budgeting api
router.use((req, res, next) => {

    const public_key: string = fs.readFileSync(__dirname + '/../private.key', 'utf8');

    try {
        const token = req.headers['x-access-token'];
        const decodedToken = jwt.verify(token, public_key);
        const user_id = decodedToken.user;

        if (req.body.user_id && req.body.user_id !== user_id) {

            throw 'Invalid User id';

        } else { 
            next();
        }
    } catch (err) {
        next(err)
    }
});

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
router.post('/get-goals', async (req, res, next) => {
    try {
        let categorySql = `SELECT * FROM Category WHERE user_id = ? ORDER BY category_id`
        const categoryResult: any = await new Promise((resolve, reject) => {
            db.query(categorySql,
                [req.body.user_id],
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
                [req.body.user_id],
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
                target_amount: element.target_amount,
                target_progress: element.target_progress,
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
        //Need to pass old goal id in along with new one if you want to change the name

        let sql = "UPDATE Goal SET target_amount = ?, target_progress = ? WHERE goal_id = ? AND category_id = ? AND user_id = ?";
        db.query(
            sql,
            [req.body.target_amount, req.body.target_progress, req.body.goal_id, req.body.category_id, req.body.user_id],

            function (err: any, result: any) {
                if (err) throw err;
                console.log("edited goal");

            });

        return res.sendStatus(200);

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
        const target_amount: String = req.body.target_amount;

        let sql = "INSERT INTO Goal (user_id, category_id, goal_id, target_amount, target_progress) VALUES(?,?,?,?,0)";
        db.query(
            sql,
            [user_id, category_id, goal_id, target_amount],
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
        let sql = `UPDATE User SET income = ? WHERE user_id = ?`;
        db.query(sql,
            [req.body.income, req.body.user_id],
            function (err: any, result: any) {
                if (err) throw err;
                console.log("income updated");
            });

        return res.sendStatus(200);

    } catch (err) {
        next(err);
    }
});

router.delete('/delete-goal', (req, res, next) => {

    try {

        console.log("deleting goal")

        let sql = `DELETE FROM Goal WHERE goal_id = ? AND category_id = ? AND user_id =?`;

        db.query(sql,
            [req.body.goal_id, req.body.category_id, req.body.user_id],
            function (err: any, result: any) {
                if (err) throw err;
                console.log("goal deleted");
            });

        return res.sendStatus(200);

    } catch (err) {
        next(err);
    }

});

module.exports = router;