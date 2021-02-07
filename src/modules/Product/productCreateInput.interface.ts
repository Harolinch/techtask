import ProductType from "./productType.enum";

export interface ProductCreateInput {
    name: string;
    price: number;
    type?: ProductType;
}


