import { kitsModel } from '@/data-access/models/kits.model'
import { BulkKitsRequest } from '@/domain/kits/kits.schema'

const createKits = (kits: any) => {
  return kitsModel.create(kits)
}

const createBulkKits = async (kitsList: BulkKitsRequest) => {
  const list = []
  for (const kit of kitsList) {
    list.push({ insertOne: { document: kit } })
  }
  return await kitsModel.bulkWrite(list)
}

const updateBulkKits = async (kitsList: any) => {
  for (const kit of kitsList) {
    const id = kit._id
    delete kit._id
    await kitsModel.findOneAndUpdate({ _id: id }, kit)
  }
}

const getUnassignedKits = async (limit: number, kit_type: String) => {
  return await kitsModel
    .find({ assigned_client_id: null, kit_type: kit_type })
    .limit(limit)
    .exec()
}
export { createKits, createBulkKits, getUnassignedKits, updateBulkKits }
