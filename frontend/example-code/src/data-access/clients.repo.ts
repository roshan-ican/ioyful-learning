import { QueryOptions } from '@/common/types'
import { Client } from '@/data-access/models/clients.model'
import {
  createClientDTO,
  updateClientDTO,
  updateClientBankDTO,
  client
} from '@/domain/client/client.schema'
import * as R from 'ramda'

/** Fetch all the clients */
const getAllClients = async (queryOptions: QueryOptions & Partial<client>) => {
  const filter = R.pick(['name', 'role'], queryOptions)
  const options: QueryOptions = R.pick(
    ['sortBy', 'limit', 'page', 'projectBy'],
    queryOptions
  )
  return await Client.paginate(filter, {
    ...options,
    populate: 'client_deposit_bank,client_bank,client_wallet,issuer'
  })
}

const getClientByIssuer = async (
  queryOptions: QueryOptions & Partial<client>,
  issuer: any
) => {
  const filter = R.pick(['name', 'role', issuer], queryOptions)
  const options: QueryOptions = R.pick(
    ['sortBy', 'limit', 'page', 'projectBy'],
    queryOptions
  )

  if (issuer) {
    filter['issuer'] = issuer // Assuming 'issuer' is the field in the Client model
  }

  return await Client.paginate(filter, {
    ...options,
    populate: 'client_bank'
  })
}

/** Fetch client by id */
const getClient = async (id: any) => {
  const client = await Client.findById(id)
    .populate(['client_deposit_bank', 'client_bank', 'client_wallet'])
    .exec()
  return client
}

const getClientsByIssuers = async (issuer: any) => {
  const client = await Client.find({ issuer: issuer })
    .populate(['client_deposit_bank', 'client_bank', 'client_wallet'])
    .exec()
  return client
}

/** Fetch client by email */
const getClientByEmail = async (email: string) => {
  const client = await Client.findOne({ email: email })
    .populate(['client_bank', 'client_deposit_bank', 'client_wallet'])
    .exec()
  return client
}

/** Create new client */
const createClient = async (newClient: createClientDTO) => {
  return await Client.create(newClient)
}

/** Update client by id and passed attributes */

const updateClient = async (id: string, updateClient: updateClientDTO) => {
  return await Client.updateOne({ _id: id }, { $set: updateClient })
}

const updateBankbyId = async (
  id: string,
  updatedBankDetails: updateClientBankDTO
) => {
  return await Client.findByIdAndUpdate(
    id,
    {
      $set: updatedBankDetails
    },
    {
      new: true
    }
  )
}

export {
  getAllClients,
  getClient,
  createClient,
  updateClient,
  updateBankbyId,
  getClientByEmail,
  getClientByIssuer,
  getClientsByIssuers
}
