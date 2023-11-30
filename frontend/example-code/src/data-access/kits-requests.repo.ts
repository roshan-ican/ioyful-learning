import { kitsRequestModel } from '@/data-access/models/kits-requests.model'

const createKitsRequests = async (data: any) => {
  return await kitsRequestModel.create(data)
}

const getKitsRequests = async () => {
  return await kitsRequestModel.find()
}

const updateKitsRequests = async (id: any, data: any) => {
  return await kitsRequestModel.updateOne({ _id: id }, data)
}

const findKitsRequest = async (id: any) => {
  return await kitsRequestModel.findById(id)
}
export {
  createKitsRequests,
  updateKitsRequests,
  findKitsRequest,
  getKitsRequests
}
