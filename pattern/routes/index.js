import express from 'express';
import userRouter from './userRouter';
import productRouter from './productRouter';
import { Authentication } from '../../middleWare/auth';

const router = express.Router();

router.use('/users', userRouter);
router.use('/products', Authentication, productRouter);

export default router;
