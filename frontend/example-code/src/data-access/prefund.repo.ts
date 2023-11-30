import { QueryOptions } from '@/common/types'
import { prefundModel } from '@/data-access/models/prefund.model'
import {
  Prefund,
  createPrefundDTO,
  updatePrefundDTO
} from '@/domain/prefunds/prefunds.schema'
import * as R from 'ramda'

const getAllPrefunds = async (
  queryOptions: QueryOptions & Partial<Prefund>
) => {
  const filter = R.pick(['name', 'role'], queryOptions)
  const options: QueryOptions = R.pick(
    ['sortBy', 'limit', 'page', 'projectBy'],
    queryOptions
  )

  return await prefundModel.paginate(filter, {
    ...options,
    populate: 'client_id,client_id.client_bank'
  })
}

const getPrefund = async (id: string) => {
  const prefund = await prefundModel.findById(id)
  return prefund
}

const getPrefundByTxnNumber = async (transaction_id: string) => {
  const prefund = await prefundModel.findOne({ transaction_id: transaction_id })
  return prefund
}

const createPrefund = async (newPrefund: createPrefundDTO) => {
  return await prefundModel.create(newPrefund)
}

const updatePrefund = async (id: string, updatePrefund: updatePrefundDTO) => {
  return await prefundModel.updateOne({ _id: id }, { $set: updatePrefund })
}

const getPrefundsByIssuer = async (
  queryOptions: QueryOptions & Partial<Prefund>,
  issuer: any // Make sure issuer has a defined type
) => {
  const filter: Partial<Prefund> = R.pick(
    ['name', 'role', issuer],
    queryOptions
  ) // Make sure to use the correct type here

  const options: QueryOptions = R.pick(
    ['sortBy', 'limit', 'page', 'projectBy'],
    queryOptions
  )

  if (issuer) {
    filter['client_id'] = issuer
  }

  return await prefundModel.paginate(filter, {
    ...options,
    populate: 'client_id.issuer,client_id,client_id.client_bank'
  })
}

export {
  getPrefundByTxnNumber,
  getPrefund,
  createPrefund,
  getAllPrefunds,
  updatePrefund,
  getPrefundsByIssuer
}
