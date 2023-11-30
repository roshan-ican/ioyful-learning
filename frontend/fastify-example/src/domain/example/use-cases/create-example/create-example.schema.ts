import { FastifySchema } from 'fastify'
import {
  readExampleResponseSchema,
  headerSchema,
  createExampleRequestDTO
} from '@/domain/example/example.schema'

export const createExampleFastifySchema = {
  summary: 'Create example schema',
  tags: ['Example'],
  security: [{}],
  headers: headerSchema,
  body: createExampleRequestDTO,
  response: {
    200: readExampleResponseSchema
  }
} satisfies FastifySchema
