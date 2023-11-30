import {
  FastifyPluginAsyncTypebox
} from '@fastify/type-provider-typebox'

import getExample from '@/domain/example/use-cases/get-example'
import { getExampleFastifySchema } from '@/domain/example/use-cases/get-example/get-example.schema'
import createExampleUseCase from '@/domain/example/use-cases/create-example'
import { createExampleFastifySchema } from '@/domain/example/use-cases/create-example/create-example.schema'

const example: FastifyPluginAsyncTypebox = async (
  fastify,
  opts
): Promise<void> => {
  fastify
    // .withTypeProvider<TypeBoxTypeProvider>()
    .get(
      '/',
      { schema: getExampleFastifySchema },
      async function (request, reply) {
        return getExample()
      }
    )
    .post(
      '/',
      { schema: createExampleFastifySchema },
      async function (request, reply) {
        const example = await createExampleUseCase(request.body)
        console.log(example);
        
      }
    )
}

export default example
