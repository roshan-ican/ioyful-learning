import {
  updateKitsRequests,
  findKitsRequest
} from '@/data-access/kits-requests.repo'

const updateKitsRequestsUseCase = async (
  kitsData: any,
  clientId: any,
  kitsId: any
) => {
  const kitsRequest = await findKitsRequest(kitsId)

  if (!kitsRequest) {
    throw new Error('Kits request not found!')
  }
  // TODO : check if clientId is of admin

  await updateKitsRequests(kitsId, kitsData)
}

export default updateKitsRequestsUseCase
