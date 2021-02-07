import ProductType from "../Product/productType.enum";
import { ProductDoc } from "../Product/product.model";
import Discount from "./discount.strategy";
import { UserDoc } from "../User/user.model";

class CustomerDiscount extends Discount {
    constructor(user: UserDoc) {
        super(user);
    }

    public loyalCustomer (): boolean {
        let date = new Date();
        date.setFullYear(date.getFullYear() - 2);
        if(this._user.createdAt <= date) {
            return true;
        } else {
            return false;
        }
    }

    public getDiscount(product: ProductDoc): number {
        let ret: number = 0;
        if (this.loyalCustomer() && (product.type !== ProductType.GROCERY)) {
            ret = product.price * 0.05;
        }
        return ret;
    }
}

export default CustomerDiscount;