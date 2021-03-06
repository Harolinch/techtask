import ProductType from './productType.enum';
import mongoose, { Document, Model, Schema } from 'mongoose';

interface ProductAttributes {
    name: string,
    price: number,
    type: ProductType,
}

export interface ProductDoc extends Document, ProductAttributes { };

interface ProductModel extends Model<ProductDoc> { }

const productSchema = new Schema<ProductDoc, ProductModel>({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    type: { type: Number, enum: Object.values(ProductType), default: ProductType.NON_GROCERY }
});

const Product = mongoose.model<ProductDoc, ProductModel>('Product', productSchema);

export default Product;