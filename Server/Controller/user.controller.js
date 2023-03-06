import express, { response } from 'express';
import { registerSchema } from '../Schema/user.schema';
export const userRegisterController=async(req,res,next)=>{
const {firstName,lastName,email,password}=req.body;
try{
    const resp=await userRegisterService(firstName,lastName,email,password);
    res.status(resp.statusNumber).send({
        response: resp.response,
        refreshToken: resp.refresh_token,
        accessToken: resp.accessToken,
        email: resp.email,
        full_name: resp.full_name,
        image: null,
      });}catch(error){
        res.send(error).status(400);
      }
}
