import express,{Router } from "express";
import {SignUserUp,SignUserIn,getMe,UserLogout} from "../controller/userController"
import { isAuthenticated } from "../middleware/userMiddleware";

const userRouter:Router=express.Router();

userRouter.post("/signup",SignUserUp)
userRouter.post("/login",SignUserIn)
userRouter.get("/me",isAuthenticated,getMe)
userRouter.post("/logout",isAuthenticated,UserLogout)

export default userRouter;