import { FastifySchema } from 'fastify'
import { readClientResponseSchema } from '@/domain/client/client.schema'
import { Type } from '@fastify/type-provider-typebox'

export const getClientByEmailFastifySchema: FastifySchema = {
  summary: 'Get client by Email',
  tags: ['Client'],
  security: [{}],
  headers: Type.Object({
    email: Type.String()
  }),
  response: {
    200: readClientResponseSchema
  }
} satisfies FastifySchema
