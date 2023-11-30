import { FastifySchema } from 'fastify'
import {  readIssuersResponseSchema } from '@/domain/issuers/issuers.schema'

export const getIssuersFastifySchema: FastifySchema = {
  summary: 'Get all Issuers',
  tags: ['Issuers'],
  security: [{}],
  response: {
    200: readIssuersResponseSchema
  }
}
