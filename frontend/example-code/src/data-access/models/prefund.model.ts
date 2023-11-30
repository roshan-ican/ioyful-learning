import mongoose from 'mongoose'
import {
  Prefund,
  PrefundType,
  TransactionStatus,
  TransactionType
} from '@/domain/prefunds/prefunds.schema'
import commonFieldsSchema from '@/data-access/models/common-fields.model'
import { ExtendedModel } from '@/data-access/common/types'
import paginate from '@/data-access/common/paginate'

interface IPrefundModel extends ExtendedModel<Prefund> {}

const prefundsSchema = new mongoose.Schema<Prefund>({
  transaction_id: {
    type: String,
    unique: true
  },
  transaction_type: {
    type: String,
    enum: {
      values: Object.values(TransactionType),
      message: `{VALUE} is not supported`
    }
  },
  status: {
    type: String,
    enum: {
      values: Object.values(TransactionStatus),
      message: '{VALUE} is not supported'
    }
  },
  prefund_type: {
    type: String,
    enum: {
      values: Object.values(PrefundType),
      message: '{VALUE} is not supported'
    }
  },
  amount: {
    type: String,
    minlength: 1
  },
  remark: {
    type: String
  },
  client_id: {
    type: mongoose.Schema.ObjectId,
    ref: 'Client'
  },
  bank_account_id: {
    type: String
  },
  ...commonFieldsSchema
})

prefundsSchema.plugin(paginate<Prefund>)

export const prefundModel = mongoose.model<Prefund, IPrefundModel>(
  'prefunds',
  prefundsSchema
)
