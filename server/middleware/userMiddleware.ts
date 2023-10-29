import {NextFunction } from "express";
import jwt from "jsonwebtoken";
import {client} from '../model/connect';
exports.isAuthenticated = async(req:any,res:any,next:any)=>{
    try{
        let query = "select * from user_token where  token= $1"; // changed user_token_id to token for searching
        const authHeader = req.header("Authorization");
        const token = authHeader ? authHeader.replace("Bearer ","") : null;
        let params = [token];
        const data = await client.query(query,params);
        console.log(data.rowCount);
        if(data.rowCount === 0){
            return res.status(401).json({error:"Unauthorized user!"});
        }
        const user_id = data.rows[0].fk_user;
        console.log(user_id)
        query = "select * from users where id = $1";
        params = [user_id];
        const result = await client.query(query,params);
        if(result.rowCount < 1){
            return res.status(401).json({error:"Invalid User !"});
        }
        req.user = result.rows[0] ;
        console.log(req.user)
        req.token = token as any;
        return next();
    }catch(err:any){
        return res.status(401).json({error:"Unauthorized user!"});
    }
}
exports.generateUserToken =async (user_id:number) => {
    try{
       console.log(user_id);
       const key = process.env.TOKEN_SECRET || 'default_secret_key';
       const token = jwt.sign({ id: user_id }, key,{expiresIn: '24h'});
       let tokenRecord = "insert into user_token(fk_user,token) values ($1,$2)";
       let params = [user_id,token];
       const result = await client.query(tokenRecord,params);
       return token; 
    }catch(err:any){
      console.log(err);
    }
}
