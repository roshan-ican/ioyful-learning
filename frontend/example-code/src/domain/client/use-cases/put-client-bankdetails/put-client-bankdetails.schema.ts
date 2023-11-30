import { FastifySchema } from 'fastify'
import {
  updateClientResponseSchema,
  updateClientBankRequestSchema
} from '@/domain/client/client.schema'
import { Type } from '@fastify/type-provider-typebox'

export const updateClientBankDetailsFastifySchema = {
  summary: 'onboard client',
  tags: ['Client'],
  security: [{}],
  params: Type.Object({
    id: Type.String()
  }),
  headers: Type.Object({
    id: Type.String()
  }),
  body: updateClientBankRequestSchema,
  response: {
    200: updateClientResponseSchema
  }
} satisfies FastifySchema
