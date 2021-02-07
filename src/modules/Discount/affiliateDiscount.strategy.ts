import ProductType from "../Product/productType.enum";
import { ProductDoc } from "../Product/product.model";
import Discount from "./discount.strategy";
import { UserDoc } from "../User/user.model";

class AffiliateDiscount extends Discount {

    constructor(user: UserDoc) {
        super(user);
    }

    public getDiscount(product: ProductDoc): number {
        let ret: number = 0;
        if (product.type !== ProductType.GROCERY) {
            ret = product.price * 0.1;
        }
        return ret;
    }
}

export default AffiliateDiscount;