import { Request, Response } from 'express';
import Bill, { BillDoc } from "../Bill/bill.model";
import DiscountService from "./discount.service";

class DiscountController {

    async calcDiscount(req: Request, res: Response) {
        const { billId } = req.body;
        const user = req.user;

        const bill: BillDoc | null = await Bill.findById(billId);
        if (!bill) {
            res.status(404).json({ error: "Bill with given id not found" });
        }

        const discountService = new DiscountService(user);
        const discount = await discountService.calcDiscount(bill!);

        res.status(200).json({ discount });
    }

}

export default new DiscountController(); 