import { createIssuersRequestDTO } from '@/domain/issuers/issuers.schema'
import { updateIssuersRequestDTO } from '@/domain/issuers/issuers.schema'

import { issuersModel } from '@/data-access/models/issuers.model'

const createIssuers = (issuers: createIssuersRequestDTO) => {
  return issuersModel.create(issuers)
}

const updateIssuers = async (id: any, issuers: updateIssuersRequestDTO) => {
  return issuersModel.updateOne({ _id: id }, { $set: issuers })
}

const getAllIssuers = () => {
  return issuersModel
    .find()
    .populate(['card_networks', 'card_reloadibility_type'])
}

/** fetch product by id */
const getIssuer = async (id: any) => {
  const issuer = await issuersModel.findById(id)
  return issuer
}

const getIssuerByName = async (name: any) => {
  const issuer = await issuersModel.findOne({ name: name })
  return issuer
}

export {
  createIssuers,
  getAllIssuers,
  updateIssuers,
  getIssuer,
  getIssuerByName
}
