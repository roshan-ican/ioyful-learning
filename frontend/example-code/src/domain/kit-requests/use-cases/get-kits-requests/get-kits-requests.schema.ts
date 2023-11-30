import { FastifySchema } from 'fastify'

export const getKitsRequestFastifySchema = {
  summary: 'New kits request',
  tags: ['Kits'],
  security: [{}],
} satisfies FastifySchema
