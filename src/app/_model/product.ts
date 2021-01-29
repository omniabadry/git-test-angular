import { paymentType } from "./paymentType";
import { productCategory } from "./product-category";
import { ProductLang } from "./product-lang";
import { Tag } from "./tag";

export interface Product{
    _id?: string;
    id?:number;
    data: ProductLang[];
    price?: number;
    discount?:number;
    imagesUrls?:string[];
    paymentTypes?:paymentType[];
    category?:productCategory;
    tags?: Tag[];
}