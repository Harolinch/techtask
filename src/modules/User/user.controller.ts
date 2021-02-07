import { Request, Response } from "express";
import User from "./user.model";
import { UserCreateInput } from "./userCreateInput.interface";

class UserController {

    create(req: Request, res: Response) {
        const userCreateInput = req.body as UserCreateInput;
        const user = User.create(userCreateInput);
        res.status(201).json({ message: 'created' });
    }
}

export default new UserController();