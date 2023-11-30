import {
  getProduct,
  getProductByName,
  updateProduct
} from '@/data-access/products.repo'
import { updateProductDTO } from '@/domain/products/product.schema'

/** update product */
const updateExistingProduct = async (
  _id: string,
  updateData: updateProductDTO
) => {
  /** fetch product by id sent from headers  */
  const fetchProduct = await getProduct(_id)

  /** check if product exists  */
  if (!fetchProduct) {
    throw new Error('Error fetching product')
  }

  /** fetch if the product exists by name already in the db */
  if (updateData.name) {
    const duplicateProd = await getProductByName(updateData.name)
    if (duplicateProd.length > 0) {
      throw new Error('Product already exists')
    }
  }
  /** update the date */
  updateData.updated_at = Date.now().toString()

  /** update the product */
  const updatedProduct = await updateProduct(_id, updateData)

  /** check if product is updated successfully */
  if (!updatedProduct) {
    throw new Error('Error updating product')
  }

  /** update product with the data  */
  fetchProduct.$set(updateData)

  /** return the updated product */
  return fetchProduct
}

export default updateExistingProduct
