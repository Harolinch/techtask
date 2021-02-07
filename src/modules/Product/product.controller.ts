import { Request, Response } from "express";
import Product from "./product.model";
import { ProductCreateInput } from './productCreateInput.interface';


class ProductController {
    create(req: Request, res: Response) {
        const productCreateInput = req.body as ProductCreateInput;
        const product = Product.create(productCreateInput);
        res.status(201).json({message: 'craeted'});
    }
}

export default new ProductController();