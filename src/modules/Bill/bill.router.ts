import express from 'express';
import billControllerInstance from './bill.controller';

const router = express.Router();

router.post('/create', billControllerInstance.create.bind(billControllerInstance));

export default router;