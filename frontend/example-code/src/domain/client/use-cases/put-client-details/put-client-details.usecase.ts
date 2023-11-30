import { getClient, updateClient } from '@/data-access/clients.repo'
import { updateClientDTO } from '@/domain/client/client.schema'
import { updateDepositeBank } from '@/data-access/clients-deposite-bank-account.repo'
import { updateBank } from '@/data-access/clients-bank-account.repo'

export const updateClientDetails = async (
  clientId: string,
  updateData: updateClientDTO
) => {
  const existingClient = await getClient(clientId)

  if (updateData.client_deposit_bank) {
    updateData.client_deposit_bank._id =
      existingClient?.client_deposit_bank?._id
    updateDepositeBank(
      existingClient?.client_deposit_bank?._id,
      updateData.client_deposit_bank
    )
  }

  if (updateData.client_bank) {
    updateData.client_bank._id = existingClient?.client_bank?._id
    updateBank(existingClient?.client_bank?._id, updateData.client_bank)
  }

  if (!existingClient) {
    throw new Error('Client not found')
  }

  const updateClientResponseSchema = await updateClient(clientId, updateData)

  existingClient.$set(updateData)

  if (!updateClientResponseSchema) {
    throw new Error('Error updating client details')
  }

  return existingClient
}
