import { ClientBankAccount } from '@/data-access/models/clients.model'
import {
  createClientBankAccountDetailsDTO,
  updateClientBankAccountDetailsDTO
} from '@/domain/client/client-bank-account-details.schema'

/** Fetch all the clients */
const getAllClientsBankAccount = async () => {
  return await ClientBankAccount.find()
}

/** Fetch client by id */
const getClientBankAccount = async (id: any) => {
  const client = await ClientBankAccount.findById(id)
  return client
}

const getBankByAccountNumber = async (accountNumber: string) => {
  const clientBankAccount = await ClientBankAccount.findOne({
    account_number: accountNumber
  })
  return clientBankAccount
}

const updateBank = async (
  id: string,
  updateBank: updateClientBankAccountDetailsDTO
) => {
  return await ClientBankAccount.updateOne({ _id: id }, { $set: updateBank })
}

/** Create new client */
const createClientBankAccount = async (
  newClientBankAccount: createClientBankAccountDetailsDTO
) => {
  return await ClientBankAccount.create(newClientBankAccount)
}
export {
  createClientBankAccount,
  getAllClientsBankAccount,
  getClientBankAccount,
  getBankByAccountNumber,
  updateBank
}
