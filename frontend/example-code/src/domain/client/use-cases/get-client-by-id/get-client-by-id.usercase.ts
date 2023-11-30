import { getClient } from '@/data-access/clients.repo'

const getClientById = async (clientId: string) => {
  const client = await getClient(clientId)
  if (!client) {
    throw new Error('Error in fetching clients')
  }
  return client
}

export default getClientById
