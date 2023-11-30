import { FastifySchema } from 'fastify'
import {productsSchema } from '@/domain/products/product.schema'
import { extendQueryParams, queryResultSchema } from '@/domain/common/query-param-helpers'

export const getProductFastifySchema = {
  summary: 'Get all products',
  tags: ['Products'],
  security: [{}],
  querystring:extendQueryParams(productsSchema),
  response: {
    200: queryResultSchema(productsSchema)
  }
} satisfies FastifySchema
