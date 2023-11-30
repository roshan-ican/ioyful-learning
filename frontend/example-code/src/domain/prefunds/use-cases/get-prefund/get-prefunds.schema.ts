import { FastifySchema } from 'fastify'
// import { readPrefundsResponseSchema } from '@/domain/prefunds/prefunds.schema'
import {
  extendQueryParams,
  queryResultSchema
} from '@/domain/common/query-param-helpers'
import { prefundsSchema } from '@/domain/prefunds/prefunds.schema'
export const getPrefundFastifySchema: FastifySchema = {
  summary: 'Get all Prefunds',
  tags: ['Prefunds'],
  security: [{}],
  querystring: extendQueryParams(prefundsSchema),
  response: {
    200: queryResultSchema(prefundsSchema)
  }
}
