import { FastifySchema } from 'fastify'
import {
  updateClientRequestSchema,
  updateClientResponseSchema
} from '@/domain/client/client.schema'
import { Type } from '@fastify/type-provider-typebox'

export const updateClientFastifySchema = {
  summary: 'Update client',
  tags: ['Client'],
  security: [{}],
  params: Type.Object({
    id: Type.String()
  }),
  body: updateClientRequestSchema,
  response: {
    200: updateClientResponseSchema
  }
} satisfies FastifySchema
