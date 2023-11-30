import { FastifySchema } from 'fastify'
import { readClientResponseSchema } from '@/domain/client/client.schema'
import { Type } from '@fastify/type-provider-typebox'

export const getClientByIdentifierFastifySchema: FastifySchema = {
  summary: 'Get client by identifier',
  tags: ['Client'],
  security: [{}],
  headers: Type.Object({
    id: Type.String()
  }),
  response: {
    200: readClientResponseSchema
  }
} satisfies FastifySchema
