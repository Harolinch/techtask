import Product, {ProductDoc} from '../Product/product.model';
import {UserDoc} from '../User/user.model';

abstract class Discount {
    protected _user: UserDoc;
    
    constructor(user: UserDoc) {
        this._user = user;
    }
    
    public abstract getDiscount(product: ProductDoc): number;
}

export default Discount;