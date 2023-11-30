import mongoose from 'mongoose'
import { KitsRequests } from '@/domain/kit-requests/kit-requests.schema'
import commonFields from '@/data-access/models/common-fields.model'
const kitsRequestsSchema = new mongoose.Schema<KitsRequests>({
  ...commonFields,
  request_count: { type: Number },
  kit_type: { type: String },
  product: { type: String },
  issuer: { type: String },
  client_id: { type: String },
  remark: { type: String },
  status: { type: String },
  business_name: { type: String },
  program_manager: { type: String },
  card_type: { type: String },
  card_variant: { type: String },
  card_design: { type: String }
})

export const kitsRequestModel = mongoose.model<KitsRequests>(
  'kitsRequests',
  kitsRequestsSchema
)
