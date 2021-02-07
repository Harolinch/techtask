import { Request, Response, NextFunction } from "express";
import Bill from '../Bill/bill.model';

class BillController {
    create(req: Request, res: Response, next: NextFunction) {
        const user = req.user;
        console.log(user);
        const bill = Bill.create({
            userId: user.id,
            products: req.body.products,
        });
        res.status(200).json({message: 'bill created'});
    }
}

export default new BillController();