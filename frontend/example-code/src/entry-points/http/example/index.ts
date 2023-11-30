import {
  TypeBoxTypeProvider,
  FastifyPluginAsyncTypebox
} from '@fastify/type-provider-typebox'

import { getExampleFastifySchema } from '@/domain/example/use-cases/get-example/get-example.schema'
import { createExampleSchema } from '@/domain/example/example.schema'

import getExampleUseCase from '@/domain/example/use-cases/get-example'
import createExampleUseCase from '@/domain/example/use-cases/create-example'

const example: FastifyPluginAsyncTypebox = async (
  fastify,
  opts
): Promise<void> => {
  fastify
    .withTypeProvider<TypeBoxTypeProvider>()
    .get(
      '/',
      { schema: getExampleFastifySchema },
      async function (request, reply) {
        return getExampleUseCase()
      }
    )
    .post(
      '/',
      {
        schema: {
          body: createExampleSchema
        }
      },
      async function (request, reply) {
        const example = await createExampleUseCase(request.body)
        return example;
      }
    )
}

export default example
