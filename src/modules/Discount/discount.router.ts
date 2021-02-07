import express, {Response} from 'express';
import DiscountControllerInstance from './discount.controller';

const router = express.Router();

router.post(
    '/get', 
    DiscountControllerInstance.calcDiscount.bind(DiscountControllerInstance),
);

export default router;