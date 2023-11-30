import { getClient } from '@/data-access/clients.repo'
import { createPrefund } from '@/data-access/prefund.repo'
import {
  TransactionStatus,
  createPrefundDTO
} from '@/domain/prefunds/prefunds.schema'
import { randomUUID } from 'crypto'

/** Add a new Prefund */
const createNewPrefund = async (newPrefund: createPrefundDTO) => {
  if (!newPrefund.client_id._id) {
    throw new Error('Client id required')
  }

  const findClient = await getClient(newPrefund.client_id._id)

  if (!findClient) {
    throw new Error('Client not found')
  }

  newPrefund.transaction_id = randomUUID()
  newPrefund.status = TransactionStatus.PENDING

  /** create the new prefund */
  const addNewPrefund = await createPrefund(newPrefund)

  if (!addNewPrefund) {
    throw new Error('Error creating Prefund')
  }

  return addNewPrefund
}

export default createNewPrefund
