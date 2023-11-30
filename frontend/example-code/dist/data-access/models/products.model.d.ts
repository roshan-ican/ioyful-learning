import { Product } from '@/domain/products/product.schema';
import { ExtendedModel } from '@/data-access/common/types';
interface IProductModel extends ExtendedModel<Product> {
}
export declare const productModel: IProductModel;
export {};
