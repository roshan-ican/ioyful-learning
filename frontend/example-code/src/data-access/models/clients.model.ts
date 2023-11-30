import mongoose from 'mongoose'
import commonFieldsSchema from './common-fields.model'
import { client } from '@/domain/client/client.schema'
import { ExtendedModel } from '../common/types'
import paginate from '../common/paginate'
import { clientBankAccountDetails } from '@/domain/client/client-bank-account-details.schema'
import { clientDepositeBankAccountDetails } from '@/domain/client/client-deposit-bank-account-details.schema'
import { clientsWallets } from '@/domain/client/client-wallet.schema'

// Define Schemas
const CardNetworkSchema = new mongoose.Schema({
  name: String
})

const ClientTypeSchema = new mongoose.Schema({
  name: String
})

const CardReloadabilityTypeSchema = new mongoose.Schema({
  name: String,
  interchange_rate: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'CardReloadabilityType'
  }
})

const ClientBankAccountSchema = new mongoose.Schema<clientBankAccountDetails>({
  account_number: {
    type: String,
    required: true
  },
  ifsc: {
    type: String,
    required: true
  },
  clientHashId: String,
  name: {
    type: String,
    required: true
  },
  ...commonFieldsSchema
})

const ClientDepositBankAccountSchema =
  new mongoose.Schema<clientDepositeBankAccountDetails>({
    account_number: {
      type: String,
      required: true
    },
    ifsc: {
      type: String,
      required: true
    },
    clientHashId: String,
    name: {
      type: String,
      required: true
    },
    ...commonFieldsSchema
  })

const ClientsWalletsSchema = new mongoose.Schema<clientsWallets>({
  total_debits: {
    type: String
  },
  total_credits: {
    type: String
  },
  clientHashId: {
    type: String
  },
  ...commonFieldsSchema
})

interface IClientModel extends ExtendedModel<client> {}

const ClientSchema = new mongoose.Schema<client>({
  buissness_name: String,
  product_type: [
    {
      type: String
    }
  ],
  mobile_number: String,
  email: {
    type: String,
    unique: true
  },
  stage: String,
  isActive: {
    type: Boolean,
    default: true
  },
  card_network: String,
  issuer: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'issuers'
    }
  ],
  client_type: [
    {
      type: String
    }
  ],
  client_bank: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ClientBankAccount'
  },
  client_deposit_bank: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ClientDepositBankAccount'
  },
  client_wallet: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ClientsWallets'
  },
  name: {
    type: String,
    required: true
  },
  nkPoc: {
    type: String,
    required: true
  },
  clientHashId: {
    type: String
  },
  ...commonFieldsSchema
})

export const CardNetwork = mongoose.model('CardNetwork', CardNetworkSchema)
export const ClientType = mongoose.model('ClientType', ClientTypeSchema)
export const CardReloadabilityType = mongoose.model(
  'CardReloadabilityType',
  CardReloadabilityTypeSchema
)

export const ClientsWallets = mongoose.model(
  'ClientsWallets',
  ClientsWalletsSchema
)

export const ClientBankAccount = mongoose.model(
  'ClientBankAccount',
  ClientBankAccountSchema
)
export const ClientDepositBankAccount = mongoose.model(
  'ClientDepositBankAccount',
  ClientDepositBankAccountSchema
)
ClientSchema.plugin(paginate<client>)

export const Client = mongoose.model<client, IClientModel>(
  'Client',
  ClientSchema
)
