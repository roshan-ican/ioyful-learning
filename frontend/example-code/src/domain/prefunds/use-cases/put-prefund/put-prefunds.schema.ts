import { FastifySchema } from 'fastify'
import {
  createPrefundResponseSchema,
  updatePrefundRequestSchema
} from '@/domain/prefunds/prefunds.schema'
import { Type } from '@fastify/type-provider-typebox'

export const updatePrefundFastifySchema = {
  summary: 'update new prefund',
  tags: ['Prefunds'],
  headers: Type.Object({
    id: Type.String()
  }),
  body: updatePrefundRequestSchema,
  security: [{}],
  response: {
    200: createPrefundResponseSchema
  }
} satisfies FastifySchema
