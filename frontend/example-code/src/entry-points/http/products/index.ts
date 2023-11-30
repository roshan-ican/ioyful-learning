import {
  TypeBoxTypeProvider,
  FastifyPluginAsyncTypebox
} from '@fastify/type-provider-typebox'

import getProduct from '@/domain/products/use-cases/get-products'
import { getProductFastifySchema } from '@/domain/products/use-cases/get-products/get-products.schema'
import createNewProduct from '@/domain/products/use-cases/post-product/post-products.usercase'
import { createProductFastifySchema } from '@/domain/products/use-cases/post-product/post-products.schema'
import updateExistingProduct from '@/domain/products/use-cases/put-product/put-products.usercase'
import { updateProductFastifySchema } from '@/domain/products/use-cases/put-product/put-products.schema'

const product: FastifyPluginAsyncTypebox = async (
  fastify,
  opts
): Promise<void> => {
  fastify
    .withTypeProvider<TypeBoxTypeProvider>()
    .get(
      '/',
      { schema: getProductFastifySchema },
      async function (request, reply) {
        const products = await getProduct(request.query)
        // @ts-ignore
        reply.send(products)
      }
    )
    /** Add a new product */
    .post(
      '/',
      { schema: createProductFastifySchema },
      async function (request, response) {
        /** createNewProduct called in post-products.usercase.ts */
        const createProduct = await createNewProduct(request.body)
        return createProduct
      }
    )
    /** update an existing product by passing id in headers['id'] and required fields['name','description','logo_url','isActive'] in body */
    .put(
      '/',
      { schema: updateProductFastifySchema },
      async function (request, response) {
        /** updateExistingProduct called in put-products.usercase.ts */
        const updateProd = await updateExistingProduct(
          request.headers.id,
          request.body
        )
        return updateProd
      }
    )
}

export default product
