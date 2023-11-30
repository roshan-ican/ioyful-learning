import { kitsUploadLedger } from '@/data-access/models/kits-uploads-ledger.model'

const createKitsUploadLedger = async (data: any) => {
  return await kitsUploadLedger.create(data)
}

const updateKitsUploadLedger = async (id: string, data: any) => {
  return await kitsUploadLedger.updateOne({ _id: id }, { $set: data })
}

export { createKitsUploadLedger, updateKitsUploadLedger }
