import { Type, Static } from '@fastify/type-provider-typebox'
import { clientSchema } from '../client/client.schema'

export enum PrefundType {
  A = 'A',
  B = 'B'
}

export enum TransactionStatus {
  PENDING = 'PENDING',
  APPROVE = 'APPROVE',
  REJECT = 'REJECT'
}

export enum TransactionType {
  A = 'A',
  B = 'B'
}

// Prefunds Schema
export const prefundsSchema = Type.Object({
  _id: Type.String(),
  transaction_id: Type.Optional(Type.String()),
  transaction_type: Type.Enum(TransactionType),
  status: Type.Optional(Type.Enum(TransactionStatus)),
  prefund_type: Type.Enum(PrefundType),
  amount: Type.String({ pattern: '^\\d+(\\.\\d+)?$' }),
  remark: Type.String(),
  client_id: Type.Partial(clientSchema),
  bank_account_id: Type.String(),
  created_at: Type.Optional(Type.String()),
  updated_at: Type.Optional(Type.String()),
  created_by: Type.Optional(Type.String()),
  updated_by: Type.Optional(Type.String())
})

// Type Alias for Prefund
export type Prefund = Static<typeof prefundsSchema>

// CRUD Operation Schemas

// 1. Request schema for creating a new Prefund.
export const createPrefundRequestSchema = Type.Omit(prefundsSchema, [
  '_id',
  'created_at',
  'updated_at'
])
export type createPrefundDTO = Static<typeof createPrefundRequestSchema>

// 2. Response schema for creating a new Prefund.
export const createPrefundResponseSchema = prefundsSchema

// 3. Request schema for reading an existing Prefund.
export const readPrefundRequestSchema = Type.Object({
  _id: Type.String()
})

// 4. Response schema for reading an existing Prefund.
export const readPrefundResponseSchema = prefundsSchema

// 5. Request schema for updating an existing Prefund.
// export const updatePrefundRequestSchema = Type.Object({
//   _id: Type.String(),
//   example: Type.Partial(prefundsSchema)
// })

export const updatePrefundRequestSchema = Type.Partial(
  Type.Omit(prefundsSchema, [
    '_id',
    'bank_account_id',
    'client_id',
    'prefund_type',
    'transaction_type',
    'transaction_id',
    'transaction_type',
    'created_at',
    'created_by'
  ])
)
export type updatePrefundDTO = Static<typeof updatePrefundRequestSchema>

// 6. Response schema for updating an existing Prefund.
export const updatePrefundResponseSchema = prefundsSchema

// 7. Request schema for deleting an existing Prefund.
export const deletePrefundRequestSchema = Type.Object({
  _id: Type.String()
})

// 8. Response schema for deleting an existing Prefund.
export const deletePrefundResponseSchema = Type.Object({
  message: Type.String()
})

// 9. Request schema for reading existing Prefund.
export const readPrefundsRequestSchema = Type.Object({
  limit: Type.Optional(Type.Number()),
  offset: Type.Optional(Type.Number())
})

// 10. Response schema for reading existing Prefund.
export const readPrefundsResponseSchema = Type.Array(prefundsSchema)
