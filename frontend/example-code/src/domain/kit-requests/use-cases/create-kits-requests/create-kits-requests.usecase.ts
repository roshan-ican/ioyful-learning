import { createKitsRequests } from '@/data-access/kits-requests.repo'
import { getClient } from '@/data-access/clients.repo'

const createKitsRequestsUseCase = async (kitsData: any) => {
  const client = await getClient(kitsData.client_id)

  if (!client) {
    throw new Error('Client not found!')
  }

  kitsData['status'] = 'PENDING'
  await createKitsRequests(kitsData)
}

export default createKitsRequestsUseCase
