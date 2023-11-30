import { FastifySchema } from 'fastify'

import { createKitsRequestDTO } from '@/domain/kit-requests/kit-requests.schema'
export const createKitsRequestFastifySchema = {
  summary: 'New kits request',
  tags: ['Kits'],
  security: [{}],
  body: createKitsRequestDTO
} satisfies FastifySchema
