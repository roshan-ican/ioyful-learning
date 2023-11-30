import { FastifySchema } from 'fastify'
import { Type } from '@fastify/type-provider-typebox'
import { readPrefundResponseSchema } from '../../prefunds.schema'

export const getClientByIssuerFastifySchema: FastifySchema = {
  summary: 'Get prefund by issuer',
  tags: ['Prefund'],
  security: [{}],
  headers: Type.Object({
    id: Type.String()
  }),
  response: {
    200: readPrefundResponseSchema
  }
} satisfies FastifySchema
