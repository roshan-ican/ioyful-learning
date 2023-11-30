import { FastifySchema } from 'fastify'
import {
    updateIssuersRequestSchema
} from '@/domain/issuers/issuers.schema'

export const updateIssuersFastifySchema = {
  summary: 'Update Issuer',
  tags: ['Issuers'],
  security: [{}],
  body: updateIssuersRequestSchema,
response: {
  200: {},
  }
} satisfies FastifySchema
