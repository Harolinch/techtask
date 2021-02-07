import Product, { ProductDoc } from "../Product/product.model";
import { BillDoc } from "../Bill/bill.model";
import DiscountFactory from "../Discount/discount.factory";
import Discount from "../Discount/discount.strategy";
import { UserDoc } from "../User/user.model";

class DiscountService {
    private _user: UserDoc;
    private _discountStrategy: Discount;

    constructor(user: UserDoc) {
        this._user = user;
        this._discountStrategy = new DiscountFactory(user).getInstance();
    }

    public async calcDiscount(bill: BillDoc) {
        try {            
            const products: ProductDoc[] = await Promise.all(bill.products.map( async (prodId) => { 
                const p = await Product.findById(prodId);
                if(!p) {
                    throw new Error(`product with id ${prodId} not found`);
                }
                return p;
            }));

            const total = products.reduce((acc, cur) => (acc + cur.price) , 0.0);

            const discounts = products.reduce((acc, cur) => (acc + this._discountStrategy.getDiscount(cur)), 0);

            const extraDiscount = total >= 100 ?  Math.floor(total / 100) * 5 : 0;

            return total - discounts - extraDiscount;
            
        } catch (err) {
            //handle error
            console.log(err.message);
        }
    }
}

export default DiscountService;