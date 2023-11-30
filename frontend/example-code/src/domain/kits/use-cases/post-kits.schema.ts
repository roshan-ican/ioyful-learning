import { Type } from '@sinclair/typebox'
import { FastifySchema } from 'fastify'

export const postKitsSchema = {
  summary: 'New kits request',
  tags: ['Kits'],
  security: [{}],
  consumes: ['multipart/form-data'],
  produces: ['application/json'],
  querystring: Type.Object({
    action: Type.Union([Type.Literal('bulkassign'), Type.Literal('bulkupload')])
  }),
  body : Type.Object({
    file: Type.Optional(Type.Any())
  })
} satisfies FastifySchema
