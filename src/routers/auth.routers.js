import express from 'express';
import { SignIn, SignUp, LogOut } from '../controllers/auth.controller.js';
import { loginSchemaMiddleware, signUpSchemaMiddleware } from '../middlewares/schemas.middleware.js';
import userExistMiddleware from '../middlewares/user.middleware.js';

const router = express.Router();

router.post('/logout', LogOut);

router.use(userExistMiddleware);

router.post('/signup', signUpSchemaMiddleware, SignUp);
router.post('/signin', loginSchemaMiddleware, SignIn);

export default router;