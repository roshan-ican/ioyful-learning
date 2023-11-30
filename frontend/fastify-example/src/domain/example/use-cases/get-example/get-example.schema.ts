import { FastifySchema } from 'fastify'
import { readExampleResponseSchema } from '@/domain/example/example.schema'

export const getExampleFastifySchema: FastifySchema = {
  summary: 'Get all examples',
  tags: ['Example'],
  security: [{}],
  response: {
    200: readExampleResponseSchema
  }
}
