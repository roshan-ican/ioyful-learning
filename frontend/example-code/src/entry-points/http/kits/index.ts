import {
  TypeBoxTypeProvider,
  FastifyPluginAsyncTypebox
} from '@fastify/type-provider-typebox'
import createBulkKitsUseCase from '@/domain/kits/use-cases/create-bulk-kits/create-bulk-kits.usecase'
import createKitsRequestsUseCase from '@/domain/kit-requests/use-cases/create-kits-requests/create-kits-requests.usecase'

import { CSV_FILE_LIMITS } from '@/common/constants'
import { parseCSV } from '@/common/utils/parseCSV'
import { parseBulkKitsRequest } from '@/domain/kits/utils'
import * as constants from '@/entry-points/http/kits/constants'
import updateKitsRequestsUseCase from '@/domain/kit-requests/use-cases/update-kits-request/update-kits-request.usecase'
import updateBulkKitsUseCase from '@/domain/kits/use-cases/update-bulk-kits/update-bulk-kits.usecase'
import { updateKitsRequestFastifySchema } from '@/domain/kit-requests/use-cases/update-kits-request/update-kits-request.schema'
import { getKitsRequestFastifySchema } from '@/domain/kit-requests/use-cases/get-kits-requests/get-kits-requests.schema'
import getKitsRequestsUseCase from '@/domain/kit-requests/use-cases/get-kits-requests/get-kits-requests.usecase'
import { createKitsRequestFastifySchema } from '@/domain/kit-requests/use-cases/create-kits-requests/create-kits-requests.schema'
// import { postKitsSchema } from '@/domain/kits/use-cases/post-kits.schema'

const kits: FastifyPluginAsyncTypebox = async (
  fastify,
  opts
): Promise<void> => {
  fastify
    .withTypeProvider<TypeBoxTypeProvider>()
    .post(
      '/',
      // { schema: postKitsSchema },
      async function (request: any, response) {
        const { action } = request.query

        if (action === 'bulkupload') {
          const data = await request.file({ limits: CSV_FILE_LIMITS })
          const kitsList = await parseCSV(data)
          const parsedKitsList = parseBulkKitsRequest(kitsList)
          createBulkKitsUseCase(parsedKitsList)
          return { message: constants.BULK_UPLOAD_INITIATED }
        } else if (action === 'bulkassign') {
          const clientID = request.headers['client-id']
          const kitsRequestId = request.headers['kits-request-id']
          await updateBulkKitsUseCase(clientID, kitsRequestId)
          return { message: constants.KITS_ASSIGN_SUCCESSFUL }
        } else {
          return { message: constants.UNKNOWN_ACTION }
        }
      }
    )
    .post(
      '/requests',
      { schema: createKitsRequestFastifySchema },
      async function (request: any, response) {
        await createKitsRequestsUseCase(request.body)
        return { message: constants.KITS_REQUESTS_SUCCESSFUL }
      }
    )
    .patch(
      '/requests',
      { schema: updateKitsRequestFastifySchema },
      async function (request: any, response) {
        const clientID = request.headers['client-id']
        const kitsId = request.headers['kits-id']
        await updateKitsRequestsUseCase(request.body, clientID, kitsId)
        return { message: constants.KITS_REQUESTS_UPDATED_SUCCESSFUL }
      }
    )
    .get(
      '/requests/',
      { schema: getKitsRequestFastifySchema },
      async function (request: any, response) {
        const kitsRequestsList = await getKitsRequestsUseCase()
        return {
          message: constants.KITS_REQUESTS_UPDATED_SUCCESSFUL,
          kitsRequests: kitsRequestsList
        }
      }
    )
}

export default kits
