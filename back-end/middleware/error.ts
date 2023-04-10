import express, {Request,Response, NextFunction } from "express";


module.exports = function(err:Error,req:Request,res:Response,next:NextFunction){
   
    return res.status(500).json('Something Failed :( \n'+ err);

} 