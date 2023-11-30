import { QueryOptions } from '@/common/types'
import { productModel } from '@/data-access/models/products.model'
import {
  Product,
  createProductDTO,
  updateProductDTO
} from '@/domain/products/product.schema'
import * as R from 'ramda'
const getProducts = async () => {
  productModel.find({})
}

/** Fetch all the products */
const getAllProducts = async (
  queryOptions: QueryOptions & Partial<Product>
) => {
  const filter = R.pick(['name', 'role'], queryOptions)
  const options: QueryOptions = R.pick(
    ['sortBy', 'limit', 'page', 'projectBy'],
    queryOptions
  )
  return await productModel.paginate(filter, options)
}

/** fetch product by id */
const getProduct = async (id: string) => {
  const product = await productModel.findById(id)
  return product
}

/** fetch product by name */
const getProductByName = async (name: string) => {
  const product = await productModel.find({ name })
  return product
}

/** create new product */
const createProduct = async (newProduct: createProductDTO) => {
  return await productModel.create(newProduct)
}

/** update product by id and passed attributes */
const updateProduct = async (id: string, updateProduct: updateProductDTO) => {
  return await productModel.updateOne({ _id: id }, { $set: updateProduct })
}

export {
  getProducts,
  getProduct,
  createProduct,
  getAllProducts,
  updateProduct,
  getProductByName
}
