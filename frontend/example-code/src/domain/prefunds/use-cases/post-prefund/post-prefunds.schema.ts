import { FastifySchema } from 'fastify'
import {
  createPrefundRequestSchema,
  createPrefundResponseSchema
} from '@/domain/prefunds/prefunds.schema'
export const createPrefundFastifySchema = {
  summary: 'Add new prefund',
  tags: ['Prefunds'],
  security: [{}],
  body: createPrefundRequestSchema,
  response: {
    200: createPrefundResponseSchema
  }
} satisfies FastifySchema
