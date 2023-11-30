import {
  TypeBoxTypeProvider,
  FastifyPluginAsyncTypebox
} from '@fastify/type-provider-typebox'

import getIssuers from '@/domain/issuers/use-cases/get-issuers'
import createIssuersUseCase from '@/domain/issuers/use-cases/create-issuers'
// import { createIssuersFastifySchema } from '@/domain/issuers/use-cases/create-issuers/create-issuers.schema'
import { updateIssuersFastifySchema } from '@/domain/issuers/use-cases/update-issuers/update-issuers.schema'
import updateUsersUseCase from '@/domain/issuers/use-cases/update-issuers/update-issuers.usecase'

const issuers: FastifyPluginAsyncTypebox = async (
  fastify,
  opts
): Promise<void> => {
  fastify
    .withTypeProvider<TypeBoxTypeProvider>()
    .get('/', { schema: {} }, async function (request, reply) {
      return await getIssuers()
    })
    .post(
      '/',
      // { schema: createIssuersFastifySchema },
      async function (request, reply) {
        //@ts-ignore
        const issuersResponse = await createIssuersUseCase(request.body)
        return issuersResponse
      }
    )
    .patch(
      '/',
      { schema: updateIssuersFastifySchema },
      async function (request, reply) {
        const issuersResponse = await updateUsersUseCase(request.body)
        return issuersResponse
      }
    )
}

export default issuers
