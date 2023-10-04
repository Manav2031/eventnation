import {NextFunction } from "express";
import jwt from "jsonwebtoken";
import {client} from '../model/connect';

export const isAuthenticated = async(req:any,res:any,next:NextFunction)=>{

        let token;
        if(req.headers.authorization &&
            req.headers.authorization.startsWith('Bearer')){
            try{
                token=req.headers.authorization.split(' ')[1];
                const key = process.env.TOKEN_SECRET || 'default_secret_key';
                const decoded=jwt.verify(token,key);
    
                console.log(decoded);
    
                next()
            }
            catch(error){
                res.status(401)
                throw new Error('Not authorized')
            }
        }
        if (!token) {
            res.status(401)
            throw new Error('Not authorized, no token')
          }
}
export const generateUserToken =async (user_id:number) => {
    try{
       console.log(user_id);
       const key = process.env.TOKEN_SECRET || 'default_secret_key';
       const token = jwt.sign({ id: user_id }, key,{expiresIn: '24h'});
       return token; 
    }catch(err:any){
      console.log(err);
    }
}
