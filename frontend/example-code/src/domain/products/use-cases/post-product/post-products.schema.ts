import { FastifySchema } from 'fastify'
import {
  createProductRequestSchema,
  createProductResponseSchema
} from '@/domain/products/product.schema'

export const createProductFastifySchema = {
  summary: 'Add new product',
  tags: ['Products'],
  security: [{}],
  body: createProductRequestSchema,
  response: {
    200: createProductResponseSchema
  }
} satisfies FastifySchema
