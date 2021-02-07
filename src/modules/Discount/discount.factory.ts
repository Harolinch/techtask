import UserType from "../User/userType.enum";
import { UserDoc } from "../User/user.model";
import EmployeeDiscount from './employeeDiscount.strategy';
import AffiliateDiscount from "./affiliateDiscount.strategy";
import CustomerDiscount from "./customerDiscount.strategy";

class DiscountFactory {
    private _user: UserDoc;
    
    constructor(user: UserDoc) {
        this._user = user;
    }

    public getInstance(user: UserDoc) {
        if(user.type == UserType.EMPLOYEE) {
            return new EmployeeDiscount(this._user);
        } else 
        if(user.type == UserType.AFFILIATE) {
            return new AffiliateDiscount(this._user);
        } else 
        if(user.type == UserType.CUSTOMER) {
            return new CustomerDiscount(this._user);
        }
    }
}

