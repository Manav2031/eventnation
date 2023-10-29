import express, { Router } from 'express';
const userRouter: Router = express.Router();
const { SignUserUp, SignUserIn, UserLogout ,getMe} = require('../controller/userController');
const {isAuthenticated } = require('../middleware/userMiddleware');

userRouter.post('/signup', SignUserUp);
userRouter.post('/login', SignUserIn);
userRouter.get('/me', isAuthenticated, getMe);
userRouter.post('/logout', isAuthenticated, UserLogout);

export default userRouter;
