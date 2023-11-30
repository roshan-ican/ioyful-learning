import { QueryOptions } from "@/common/types";
import { getAllProducts } from "@/data-access/products.repo";
import { Product } from "../../product.schema";

const getProduct = async (queryOptions:QueryOptions & Partial<Product>)=> {
  const products = await getAllProducts(queryOptions);
  if(!products)
  {
    throw new Error('Error Fetching Products');
  }
  return products;
}

export default getProduct




