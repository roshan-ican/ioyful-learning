import mongoose from 'mongoose'
import { Kits } from '@/domain/kits/kits.schema'
import commonFields from '@/data-access/models/common-fields.model'
const kitsSchema = new mongoose.Schema<Kits>({
  ...commonFields,
  kit_number: { type: String, unique: true },
  kit_type: { type: String },
  product: { type: String },
  issuer: { type: String },
  remark: { type: String },
  status: { type: String },
  assigned_client_id: { type: String },
  client_id: { type: String }
})

export const kitsModel = mongoose.model<Kits>('kits', kitsSchema)
