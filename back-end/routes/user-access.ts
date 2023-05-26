import * as express from "express";
import db from "../startup/dbConnection";
import { error } from "console";


const mysql = require('mysql');
const fs = require('fs');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const router = express.Router();

router.post('/create-user', async (req, res, next) => {

    try {

        const user_id: String = req.body.user_id;
        const password: String = req.body.password;

        console.log("inserting data...")

        // Check for existing user
        let userCheck = "SELECT * FROM User WHERE user_id = ?";

        let userExists: boolean = await db.query(
            userCheck,
            [user_id],
            function (err: Error, result: any) {
                if (err) throw err;
                if (result.length > 0) { return true };
                return false;
            }
        )

        if (userExists === true) {
            return res.status(409).json({ error: "User already exists" })
        } else {

            // Hash user details

            const password_salt: String = bcrypt.genSaltSync(10);
            const password_hash: String = bcrypt.hashSync(password, password_salt);

            //Insert user data query
            db.query(
                "INSERT INTO User (user_id, password_hash, password_salt, income) VALUES(?,?,?,?)",
                [user_id, password_hash, password_salt, 0],

                function (err: Error, result: any) {
                    if (err) throw err;
                    console.log("inserted user");
                });

            return res.sendStatus(200);
        };


    } catch (err) {
        next(err);
    }

});

router.post('/login', async (req, res, next) => {


    try {

        const user_id: String = req.body.user_id;
        const password: String = req.body.password;

        console.log("logging in ... ");

        const result: any = await db.query(
            'SELECT * FROM user WHERE user_id = ?',
            [user_id],
            function (err: any, result: any) {
                if (err) throw err;

                //Check user name match with the db entry
                if (result.length === 0) { return res.status(409).json({ error: "User does not exist!" }) };

                //Check password matches with hash when salted using stored
                const salt = result[0].password_salt;
                const password_hash = bcrypt.hashSync(password, salt);
                if (password_hash != result[0].password_hash) return res.status(409).json({ error: "Incorrect Password" });

                // generate JWT

                const privateKey: string = fs.readFileSync(__dirname + '/../private.key', 'utf8');
                const token: string = jwt.sign({ user: result[0].user_id }, privateKey, { algorithm: "RS256", allowInsecureKeySizes: true });

                // return jwt

                console.log("logged in");

                return res.send({ "token": token, "income": result[0].income });
            });

    } catch (err) {
        next(err);
    }





});

module.exports = router;
