import mongoose from 'mongoose'
import { Product } from '@/domain/products/product.schema'
import commonFieldsSchema from '@/data-access/models/common-fields.model'
import paginate from '@/data-access/common/paginate'
import { ExtendedModel } from '@/data-access/common/types'

interface IProductModel extends ExtendedModel<Product> {}

const productsSchema = new mongoose.Schema<Product, IProductModel>({
  name: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
    required: true
  },
  logo_url: {
    type: String,
    required: true
  },
  isActive: {
    type: Boolean,
    default: true
  },
  ...commonFieldsSchema
})

productsSchema.plugin(paginate<Product>)

export const productModel = mongoose.model<Product, IProductModel>(
  'product',
  productsSchema
)
