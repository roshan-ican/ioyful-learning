import { createClient, getClientByEmail } from '@/data-access/clients.repo'
import { createClientDTO } from '@/domain/client/client.schema'
import {
  // getBankByAccountNumber,
  createClientBankAccount
} from '@/data-access/clients-bank-account.repo'
import {
  createClientDepositesBankAccount
  // getDepositeBankAccountByAccountNumber
} from '@/data-access/clients-deposite-bank-account.repo'
import { createClientBankAccountDetailsDTO } from '@/domain/client/client-bank-account-details.schema'
import { createClientDepositeBankAccountDetailsDTO } from '@/domain/client/client-deposit-bank-account-details.schema'
import { randomUUID } from 'crypto'
import { createClientsWalletsDTO } from '../../client-wallet.schema'
import { createClientsWallets } from '@/data-access/clients-wallets.repo'
import { getIssuer } from '@/data-access/issuers.repo'

/** ---------------------- create client ---------------------  */
const createNewClient = async (newClient: createClientDTO) => {
  // CHECKING IF CLIENT ALREDY EXISTS BY EMAILID
  const existingClient = await getClientByEmail(newClient.email)

  if (existingClient) {
    throw new Error('Client already exists with the provided email')
  }

  /**CHECKING FOR REQUIRED FIELDS AND VALIDATIONS*/
  const validationCheck = await checkForValidation(newClient)

  if (!validationCheck) throw new Error('ALL FIELDS REQUIRED')
  if (newClient.issuer) {
    newClient.issuer.forEach(async (i) => {
      const issuer = await getIssuer(i._id)

      if (!issuer) {
        throw new Error('Error while fetching issuer')
      }
      /** setting request to fetched issuer  */
      i._id = issuer._id
      i.card_networks = issuer.card_networks
      i.card_reloadibility_type = issuer.card_reloadibility_type
      i.logo_url = issuer.logo_url
      i.name = issuer.name
      i.program_type = issuer.program_type
      i.status = issuer.status
    })
    const clientHashId = randomUUID()

    newClient.clientHashId = clientHashId

    const newClientWallet: createClientsWalletsDTO = {
      clientHashId: clientHashId,
      total_credits: '0.00',
      total_debits: '0.00'
    }

    newClient.client_wallet = newClientWallet

    // CHECKING FOR BANK DETAILS
    if (newClient.client_bank?.ifsc && newClient.client_deposit_bank?.ifsc) {
      // SETTING OBJECT TO CREATE BANK ACCOUNT
      const newAccount: createClientBankAccountDetailsDTO = {
        account_number: newClient.client_bank?.account_number,
        ifsc: newClient.client_bank?.ifsc,
        name: newClient.client_bank.name,
        clientHashId: clientHashId
      }
      /**===CREATING BANK ACCOUNT===*/
      const clientBankAcc = await createBankAccount(newAccount)

      /**IF BANK ACCOUNT IS CREATED */
      if (clientBankAcc) {
        // EXTRACTING BANK ID TO SET SAME ID TO CLIENT, AND DEPOSITE ACCOUNT
        const bankId = clientBankAcc._id

        // SETTING OBJECT TO CREATE DEPOSITE BANK ACCOUNT
        const newDepositeBankAccount: createClientDepositeBankAccountDetailsDTO =
          {
            account_number: newClient.client_deposit_bank?.account_number,
            ifsc: newClient.client_deposit_bank?.ifsc,
            name: newClient.client_deposit_bank.name,
            clientHashId: clientHashId
          }

        /**===CREATING DEPOSITE BANK ACCOUNT===*/
        const depositeBankAcc = await createDepositeBankAccount(
          newDepositeBankAccount
        )

        //SETTING OBJECT TO CREATE CLIENT WALLET

        /**====CREATING CLIENT WALLET===*/
        const clientWallet = await createClientWallet(newClientWallet)

        //SETTING SAVED BANK AND DEPOSITE BANK DETAILS TO CLIENT
        newClient.client_bank._id = bankId
        newClient.client_deposit_bank._id = depositeBankAcc?._id
        newClient.client_wallet._id = clientWallet?._id

        /**===CREATING CLIENT===*/
        const createdClient = await createClient(newClient)
        if (!createdClient) throw new Error('Client creation not done')

        return createdClient
      }
    }
  }
  throw new Error('Error while creating client')
}

/** ---------------------- CREATE CLIENT BANK ACCOUNT -------------------------  */
const createBankAccount = async (
  newAccount: createClientBankAccountDetailsDTO
) => {
  if (newAccount.account_number) {
    const newAccountCreate = await createClientBankAccount(newAccount)

    if (!newAccountCreate) {
      throw new Error('account creation error')
    }

    return newAccountCreate
  }
}

/** ---------------------- CREATE CLIENT DEPOSITE BANK ACCOUNT ---------------------  */
const createDepositeBankAccount = async (
  newDepositeAccount: createClientDepositeBankAccountDetailsDTO
) => {
  if (newDepositeAccount.account_number) {
    const newDepositeAccountCreate = await createClientDepositesBankAccount(
      newDepositeAccount
    )

    if (!newDepositeAccountCreate) {
      throw new Error('depoite account creation error')
    }

    return newDepositeAccountCreate
  }
}

/**----------------------------CHECK FOR VALIDATION ERRORS----------------------------- */
const checkForValidation = async (newClient: createClientDTO) => {
  if (
    newClient.client_bank?.account_number &&
    newClient.client_bank?.ifsc &&
    newClient.client_deposit_bank?.account_number &&
    newClient.client_deposit_bank?.ifsc
  ) {
    return true
  } else {
    return false
  }
}

const createClientWallet = async (newWallet: createClientsWalletsDTO) => {
  const newWalletCreate = await createClientsWallets(newWallet)

  if (!newWalletCreate) {
    throw new Error('wallet creation error')
  }

  return newWalletCreate
}

export { createNewClient }
