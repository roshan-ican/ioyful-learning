import { QueryOptions } from '@/common/types'
import { getAllPrefunds } from '@/data-access/prefund.repo'
// import { client } from '/client/client.schema'
import { Prefund } from '@/domain/prefunds/prefunds.schema'

const getPrefund = async (queryOptions: QueryOptions & Partial<Prefund>) => {
  const prefund = await getAllPrefunds(queryOptions)
  if (!prefund) {
    throw new Error('Error Fetching Prefunds')
  }
  return prefund
}

export default getPrefund
