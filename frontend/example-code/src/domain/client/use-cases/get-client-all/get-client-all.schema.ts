import { FastifySchema } from 'fastify'
import { clientSchema } from '@/domain/client/client.schema'
// import { readClientsResponseSchema } from '@/domain/client/client.schema'
import {
  extendQueryParams,
  queryResultSchema
} from '@/domain/common/query-param-helpers'

export const getClientFastifySchema = {
  summary: 'Get all clients',
  tags: ['Client'],
  security: [{}],
  querystring: extendQueryParams(clientSchema),
  response: {
    200: queryResultSchema(clientSchema)
  }
} satisfies FastifySchema
