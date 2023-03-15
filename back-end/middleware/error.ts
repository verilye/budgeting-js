import express, {Request,Response, NextFunction } from "express";


module.exports = function(err:Error,req:Request,res:Response,next:NextFunction){
   
    res.status(500).send('Something Failed :( \n');

}