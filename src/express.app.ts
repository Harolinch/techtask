import Express, { Application, NextFunction, Request, Response } from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';

import discountRouter from './modules/Discount/discount.router';
import userRouter from './modules/User/user.router';
import productRouter from './modules/Product/product.router';
import billRouter from './modules/Bill/bill.router';

import authenticate from './middlewares/authenticate.middleware';
import { UserDoc } from './modules/User/user.model';

declare global {
    namespace Express {
        export interface Request {
            user: UserDoc,
        }
    }
}



const APP: Application = Express();

APP.use(cors.default());
APP.use(bodyParser.json());

APP.use('/api/user', userRouter);
APP.use('/api/discount', authenticate, discountRouter);
APP.use('/api/product', authenticate, productRouter);
APP.use('/api/bill', authenticate, billRouter);

APP.use((err: Error, req: Request, res: Response) => {
    res.status(500).json({ message: err.message });
});

export default APP;