import crypto from "crypto";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { Database } from "../Database/database.js";
import Logger from "../Controller/Logger.js";

export const userRegisterService = async (fname, lname, email, password) => {
  return new Promise((resolve, reject) => {
    const q1 = `SELECT * FROM user WHERE email="${email}"`;
    Database.query(q1,(err,res)=>{
        if(err){
            Logger.error("Data retrieve error");
            return 400;
        }
        else if(res.length>0){
            Logger.error("User already exists");
            return 409;
        } else {
            const q2 = "INSERT INTO user (firstName, lastName, email, password) VALUES (?, ?, ?, ?)";
            Database.query(q2, [fname, lname, email, password], (err) => {
              if (err) {
                Logger.error("Data insert error");
                return 401;
              } else {
                Logger.info("Inserted successfully");
                resolve(200);
              }
            });
        }
    });
  });
};

export const userLoginService=(email,password)=>{
    return new Promise((resolve, reject) => {
const q1 = `SELECT * FROM user WHERE email="${email}"`;
Database.query(q1,(err,res)=>{
    if(err){
        Logger.error("Fetching error");
        return 400;
    }
    else{
        Logger.info(res[0].password);
        if(res[0].password===password){
            resolve(200);
        }
        else{
            Logger.error("does not matches");
            return 400;
        }
    }
})
})}