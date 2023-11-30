import { getAllClients } from '@/data-access/clients.repo'
import { client } from '../../client.schema'
import { QueryOptions } from '@/common/types'

const getAllClient = async (queryOptions: QueryOptions & Partial<client>) => {
  const client = await getAllClients(queryOptions)
  if (!client) {
    throw new Error('Error in fetching clients')
  }
  return client
}

export default getAllClient
