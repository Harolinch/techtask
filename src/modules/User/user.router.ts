import express from 'express';
import userControllerInstance from './user.controller';

const router = express.Router();

router.post('/create', userControllerInstance.create.bind(userControllerInstance));

export default router;