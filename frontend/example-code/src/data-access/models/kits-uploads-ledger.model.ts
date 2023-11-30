import mongoose from 'mongoose'
import { KitsUploadLedger } from '@/domain/kits-upload-ledger/kitsUploadLedger.schema'

const kitsUploadLedgerSchema = new mongoose.Schema<KitsUploadLedger>({
  storageLink: { type: String },
  createdAt: { type: Date, default: Date.now },
  modifiedBy: { type: String },
  modifiedAt: { type: Date },
  remark: { type: String },
  status: { type: String, required: true }
})

export const kitsUploadLedger = mongoose.model<KitsUploadLedger>(
  'kitsUploadLedger',
  kitsUploadLedgerSchema
)
