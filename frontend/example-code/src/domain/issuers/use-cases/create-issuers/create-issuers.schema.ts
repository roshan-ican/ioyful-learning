import { FastifySchema } from 'fastify'
import {
    issuersSchema,
    createIssuersResponseSchema
} from '@/domain/issuers/issuers.schema'

export const createIssuersFastifySchema = {
  summary: 'Add new Issuer',
  tags: ['Issuers'],
  security: [{}],
  body: issuersSchema,
  response: {
    200: createIssuersResponseSchema
  }
} satisfies FastifySchema
