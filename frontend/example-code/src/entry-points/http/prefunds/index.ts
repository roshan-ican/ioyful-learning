import {
  FastifyPluginAsyncTypebox,
  TypeBoxTypeProvider
} from '@fastify/type-provider-typebox'

import getPrefund from '@/domain/prefunds/use-cases/get-prefund'
import { getPrefundFastifySchema } from '@/domain/prefunds/use-cases/get-prefund/get-prefunds.schema'
import createNewPrefund from '@/domain/prefunds/use-cases/post-prefund/post-prefunds.usercase'
import { createPrefundFastifySchema } from '@/domain/prefunds/use-cases/post-prefund/post-prefunds.schema'
import updateExistingPrefund from '@/domain/prefunds/use-cases/put-prefund/put-prefunds.usercase'
import { updatePrefundFastifySchema } from '@/domain/prefunds/use-cases/put-prefund/put-prefunds.schema'
import getPrefundsByIssuerId from '@/domain/prefunds/use-cases/get-prefund-by-issuer/get-prefund-by-issuer.usercase'

const product: FastifyPluginAsyncTypebox = async (
  fastify,
  opts
): Promise<void> => {
  /** fetch all the existing products */
  fastify
    .withTypeProvider<TypeBoxTypeProvider>()
    .get(
      '/',
      { schema: getPrefundFastifySchema },
      async function (request, reply) {
        // @ts-ignore
        const getAllPrefunds = await getPrefund(request.query)
        return getAllPrefunds
      }
    )
    .get('/issuer', {}, async function (request, reply) {
      return await getPrefundsByIssuerId(
        // @ts-ignore
        request.query,
        request.headers.name as string
      )
    })
    .post(
      '/',
      { schema: createPrefundFastifySchema },
      async (request, response) => {
        const createPrefund = await createNewPrefund(request.body)
        return createPrefund
      }
    )
    .put(
      '/',
      { schema: updatePrefundFastifySchema },
      async function (request, response) {
        const updateProd = await updateExistingPrefund(
          request.headers.id as string,
          request.body
        )
        return updateProd
      }
    )
}

export default product
