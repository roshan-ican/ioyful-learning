import {
  createClientDepositeBankAccountDetailsDTO,
  updateClientDepositeBankAccountDetailsDTO
} from '@/domain/client/client-deposit-bank-account-details.schema'
import { ClientDepositBankAccount } from './models/clients.model'

/** Fetch all the clients */
const getAllClientsDepositesBankAccount = async () => {
  return await ClientDepositBankAccount.find()
}

/** Fetch client by id */
const getClientDepositesBankAccount = async (id: any) => {
  const client = await ClientDepositBankAccount.findById(id)
  return client
}

const getDepositeBankAccountByAccountNumber = async (accountNumber: string) => {
  const depositeBankAccount = await ClientDepositBankAccount.findOne({
    account_number: accountNumber
  })
  return depositeBankAccount
}

const updateDepositeBank = async (
  id: string,
  updateProduct: updateClientDepositeBankAccountDetailsDTO
) => {
  return await ClientDepositBankAccount.updateOne(
    { _id: id },
    { $set: updateProduct }
  )
}

/** Create new client */
const createClientDepositesBankAccount = async (
  newClientDepositeBankAccount: createClientDepositeBankAccountDetailsDTO
) => {
  return await ClientDepositBankAccount.create(newClientDepositeBankAccount)
}
export {
  createClientDepositesBankAccount,
  getAllClientsDepositesBankAccount,
  getClientDepositesBankAccount,
  getDepositeBankAccountByAccountNumber,
  updateDepositeBank
}
