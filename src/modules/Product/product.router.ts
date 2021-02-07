import express from 'express';
import productControllerInstance from './product.controller';

const router = express.Router();

router.post('/create', productControllerInstance.create.bind(productControllerInstance));

export default router;