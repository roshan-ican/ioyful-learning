import { ClientsWallets } from '@/data-access/models/clients.model'
import {
  createClientsWalletsDTO,
  updateClientsWalletsDTO
} from '@/domain/client/client-wallet.schema'

/** Fetch all the clients */
const getAllClientWallets = async () => {
  return await ClientsWallets.find()
}

/** Fetch client by id */
const getClientsWallets = async (id: any) => {
  const client = await ClientsWallets.findById(id)
  return client
}

const updateWallet = async (
  id: string,
  updateWallet: updateClientsWalletsDTO
) => {
  return await ClientsWallets.updateOne({ _id: id }, { $set: updateWallet })
}

/** Create new client */
const createClientsWallets = async (
  newClientsWallets: createClientsWalletsDTO
) => {
  return await ClientsWallets.create(newClientsWallets)
}
export {
  createClientsWallets,
  getAllClientWallets,
  getClientsWallets,
  updateWallet
}
