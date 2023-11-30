import { FastifySchema } from 'fastify'
import {
  createClientRequestSchema,
  createClientResponseSchema
} from '@/domain/client/client.schema'

export const createClientFastifySchema = {
  summary: 'onboard client',
  tags: ['Client'],
  security: [{}],
  body: createClientRequestSchema,
  response: {
    200: createClientResponseSchema
  }
} satisfies FastifySchema
