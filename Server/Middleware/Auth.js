import jwt from "jsonwebtoken";
import Logger from "../Controller/Logger.js";
const RefreshKey="SecretRefreshKey";
const Accesskey="SecretAccessKey";
let accessToken;

export const generateToken=(data)=>{
  const  userData={
        email:data.email,
        firstName:data.firstName
       }
       Logger.info(userData.email);
       try {
         accessToken = jwt.sign(userData, Accesskey);
        return accessToken;
      } catch (err) {
        Logger.error(err);
        return null;
      }
}
 
export const authenticateUser=(req, res, next)=>{
const authHeader= req.headers['authorization'];
const token=authHeader && authHeader.split(" ")[1];
if (token==null) res.status(400).send("no token found");

jwt.verify(token, Accesskey,(err,userData)=>{ 
    if(err){
       res.status(400).send("Error in verifying token");
    }
else{
    req.user=userData;
    next();
}
})
}