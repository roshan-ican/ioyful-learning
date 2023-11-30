import { getClient } from '@/data-access/clients.repo'
import {
  getClientsWallets,
  updateWallet
} from '@/data-access/clients-wallets.repo'
import {
  getPrefundByTxnNumber,
  updatePrefund
} from '@/data-access/prefund.repo'
import { updateClientsWalletsDTO } from '@/domain/client/client-wallet.schema'
import {
  TransactionStatus,
  updatePrefundDTO
} from '@/domain/prefunds/prefunds.schema'

/** update prefund */
const updateExistingPrefund = async (
  transaction_id: string,
  updateData: updatePrefundDTO
) => {
  /** FETCH PREFUND */
  const fetchPrefund = await getPrefundByTxnNumber(transaction_id)

  if (!fetchPrefund) {
    throw new Error('Error fetching prefund')
  }

  if (fetchPrefund?.status !== TransactionStatus.PENDING) {
    throw new Error('INVALID REQUEST')
  }

  if (
    parseFloat((fetchPrefund?.amount && fetchPrefund.amount) || '') !==
    parseFloat((updateData.amount && updateData.amount) || '')
  ) {
    throw new Error('INVALID PREFUND REQUEST')
  }

  updateData.updated_at = Date.now().toString()

  const updatedPrefund = await updatePrefund(fetchPrefund._id, updateData)

  if (!updatedPrefund) {
    throw new Error('Error updating prefund')
  }

  if (updateData.status === TransactionStatus.APPROVE) {
    const client = await getClient(fetchPrefund.client_id._id)
    if (!client) {
      throw new Error('client not found')
    }
    const clientWalletsId = client?.client_wallet?._id
    const fetchClientWallet = await getClientsWallets(clientWalletsId)
    if (!fetchClientWallet) {
      throw new Error('client not found')
    }
    const debits =
      (fetchClientWallet.total_debits && fetchClientWallet.total_debits) || ''
    const credits =
      (fetchClientWallet.total_credits && fetchClientWallet.total_credits) || ''

    const prefundAmount = (updateData.amount && updateData.amount) || ''
    const balance = parseFloat(credits) - parseFloat(debits)
    console.log('=============BALANCE==============')
    console.log(balance)
    const updatedCredits = parseFloat(credits) + parseFloat(prefundAmount)
    const updateWalletRequest: updateClientsWalletsDTO = {
      total_credits: updatedCredits.toString()
    }
    const updateWalletCredits = await updateWallet(
      clientWalletsId,
      updateWalletRequest
    )

    if (!updateWalletCredits) {
      throw new Error('wallet update error')
    }
  }

  /** update prefund with the data  */
  fetchPrefund.$set(updateData)

  return fetchPrefund
}

export default updateExistingPrefund
