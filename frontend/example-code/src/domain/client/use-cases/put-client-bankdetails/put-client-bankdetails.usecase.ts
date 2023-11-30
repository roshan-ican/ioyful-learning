import { getClient, updateBankbyId } from '@/data-access/clients.repo'
import { updateClientBankDTO } from '@/domain/client/client.schema'

export const updateClientBankDetails = async (
  clientId: string,
  bankDetails: updateClientBankDTO
) => {
  const existingClient = await getClient(clientId)

  if (!existingClient) {
    throw new Error('Client not found')
  }

  try {
    const updatedClient = await updateBankbyId(clientId, bankDetails)

    if (!updatedClient) {
      throw new Error('Client not found')
    }

    return updatedClient
  } catch (error) {
    throw new Error('Error updating client bank details')
  }
}
