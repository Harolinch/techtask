import UserType from "../User/userType.enum";
import { UserDoc } from "../User/user.model";
import EmployeeDiscount from './employeeDiscount.strategy';
import AffiliateDiscount from "./affiliateDiscount.strategy";
import CustomerDiscount from "./customerDiscount.strategy";
import Discount from "./discount.strategy";

class DiscountFactory {
    private _user: UserDoc;
    
    constructor(user: UserDoc) {
        this._user = user;
    }

    public getInstance(): Discount {
        if(this._user.type == UserType.EMPLOYEE) {
            return new EmployeeDiscount(this._user);
        } else 
        if(this._user.type == UserType.AFFILIATE) {
            return new AffiliateDiscount(this._user);
        } else 
        if(this._user.type == UserType.CUSTOMER) {
            return new CustomerDiscount(this._user);
        } else {
            return new CustomerDiscount(this._user);
        }
    }
}

export default DiscountFactory;