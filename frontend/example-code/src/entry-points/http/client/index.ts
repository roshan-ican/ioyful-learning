import {
  TypeBoxTypeProvider,
  FastifyPluginAsyncTypebox
} from '@fastify/type-provider-typebox'

import { getClientByIdentifierFastifySchema } from '@/domain/client/use-cases/get-client-by-id/get-client-by-id.schema'
import { createNewClient } from '@/domain/client/use-cases/post-client/index'
import { createClientFastifySchema } from '@/domain/client/use-cases/post-client/post-client.schema'
import { updateClientDetails } from '@/domain/client/use-cases/put-client-details/put-client-details.usecase'
import { updateClientFastifySchema } from '@/domain/client/use-cases/put-client-details/put-client-deatils.schema'
import getAllClient from '@/domain/client/use-cases/get-client-all/get-client-all.usecase'
// import { getClientFastifySchema } from '@/domain/client/use-cases/get-client-all/get-client-all.schema'
import getClientById from '@/domain/client/use-cases/get-client-by-id/get-client-by-id.usercase'
import getClientByEmailId from '@/domain/client/use-cases/get-client-by-email/get-client-by-email.usecase'
// import { updateClientBankDetailsFastifySchema } from '@/domain/client/use-cases/put-client-bankdetails/put-client-bankdetails.schema'
// import { updateClientBankDetails } from '@/domain/client/use-cases/put-client-bankdetails/put-client-bankdetails.usecase'
import { getClientByEmailFastifySchema } from '@/domain/client/use-cases/get-client-by-email/get-client-by-email.schema'
// import { getClientByIssuerFastifySchema } from '@/domain/client/use-cases/get-client-by-issuer/get-client-by-issuer.schema'
import getClientByIssuerId from '@/domain/client/use-cases/get-client-by-issuer/get-client-by-issuer.usercase'

const client: FastifyPluginAsyncTypebox = async (
  fastify,
  opts
): Promise<void> => {
  fastify
    .withTypeProvider<TypeBoxTypeProvider>()
    .get('/', {}, async function (request, reply) {
      // @ts-ignore
      const allClients = await getAllClient(request.query)
      reply.send(allClients)
    })
    .get('/issuer', {}, async function (request, reply) {
      return await getClientByIssuerId(
        // @ts-ignore
        request.query,
        request.headers.name as string
      )
    })
    .get(
      '/identifier',
      { schema: getClientByIdentifierFastifySchema },
      async function (request, reply) {
        const client = await getClientById(request.headers.id as string)
        reply.send(client)
      }
    )
    .get(
      '/email',
      { schema: getClientByEmailFastifySchema },
      async function (request, reply) {
        const client = await getClientByEmailId(request.headers.email as string)
        return client
      }
    )
    .post(
      '/',
      { schema: createClientFastifySchema },
      async function (request, reply) {
        const createdClient = await createNewClient(request.body)
        reply.send(createdClient)
      }
    )
    .put(
      '/:id',
      { schema: updateClientFastifySchema },
      async function (request, reply) {
        const updatedClient = await updateClientDetails(
          request.params.id,
          request.body
        )
        reply.send(updatedClient)
      }
    )
  // .put(
  //   '/:id/bank',
  // { schema: updateClientBankDetailsFastifySchema },
  //   async function (request, reply) {
  //     const updatedClient = await updateClientBankDetails(
  //       request.headers.id,
  //       request.body
  //     )
  //     reply.send(updatedClient)
  //   }
  // )
}

export default client
