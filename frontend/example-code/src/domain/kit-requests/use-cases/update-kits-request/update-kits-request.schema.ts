import { FastifySchema } from 'fastify'

import { updateKitsRequestsDTO } from '@/domain/kit-requests/kit-requests.schema'
import { Type } from '@sinclair/typebox'
export const updateKitsRequestFastifySchema = {
  summary: 'New kits request',
  tags: ['Kits'],
  security: [{}],
  headers: Type.Object({
    'client-id': Type.Optional(Type.String()),
    'kits-id': Type.String()
  }),
  body: updateKitsRequestsDTO
} satisfies FastifySchema
