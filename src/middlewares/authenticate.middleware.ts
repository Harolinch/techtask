import { NextFunction, Request, Response } from "express";
import User from "../modules/User/user.model";

const authenticate = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const userId = req.headers.authorization;
        const user = await User.findById(userId);
        req.user = user!;
        return next();
    }
    catch (err) {
        return next(new Error('error authenticating user'));
    }
}

export default authenticate;