import express, { Request, Response, NextFunction } from "express";
const fs = require('fs');
const jwt = require('jsonwebtoken');

module.exports = function (err: Error, req: Request, res: Response, next: NextFunction) {

    const token = req.body.token;
    const public_key: string = fs.readFileSync(__dirname + '/../private.key', 'utf8');
    try {
        if (token) {

            const decode:boolean = jwt.verify(token, public_key, function(valid:boolean){
                // Check if within valid date, check user matches 
            });

            res.locals.authenticated = true;

        }
    } catch (err) {
        next(err)
    }

}