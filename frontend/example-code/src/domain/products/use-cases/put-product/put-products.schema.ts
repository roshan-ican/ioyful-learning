import { FastifySchema } from 'fastify'
import {
  createProductResponseSchema,
  updateProductRequestSchema
} from '@/domain/products/product.schema'
import { Type } from '@fastify/type-provider-typebox'

export const updateProductFastifySchema = {
  summary: 'update new product',
  tags: ['Products'],
  headers: Type.Object({
    id: Type.String()
  }),
  body: updateProductRequestSchema,
  security: [{}],
  response: {
    200: createProductResponseSchema
  }
} satisfies FastifySchema
