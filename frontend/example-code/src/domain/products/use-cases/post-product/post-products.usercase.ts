import { createProduct, getProductByName } from '@/data-access/products.repo';
import { createProductDTO } from '@/domain/products/product.schema';

/** Add a new Product */
const createNewProduct = async (newProduct : createProductDTO) => {
  
  /** fetch product by name */
  const existingProducts = await getProductByName(newProduct.name);

  /** check if Product exists already */
  if(existingProducts.length > 0){
    throw new Error("Product already exists");
  }
  
  /** create the new product */
  const createNewProduct = await createProduct(newProduct);
  
  if(!createNewProduct){
    throw new Error('Error creating Product');
  }
  return createNewProduct;
}

export default createNewProduct