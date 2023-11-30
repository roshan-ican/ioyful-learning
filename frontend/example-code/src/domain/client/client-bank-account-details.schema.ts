import { Type, Static } from '@fastify/type-provider-typebox'

export const ClientBankAccountDetailsSchema = Type.Object({
  _id: Type.Optional(Type.Any()),
  account_number: Type.Optional(Type.String()),
  ifsc: Type.Optional(Type.String()),
  clientHashId: Type.Optional(Type.String()),
  name: Type.Optional(Type.String()),
  created_at: Type.Optional(Type.String()),
  updated_at: Type.Optional(Type.String()),
  updated_by: Type.Optional(Type.String()),
  created_by: Type.Optional(Type.String())
})

// Type Alias for Client
export type clientBankAccountDetails = Static<
  typeof ClientBankAccountDetailsSchema
>

// CRUD Operation Schemas

// 1. Request schema for creating a new Client.
export const createClientBankAccountRequestSchema = Type.Omit(
  ClientBankAccountDetailsSchema,
  ['_id']
)
export type createClientBankAccountDetailsDTO = Static<
  typeof createClientBankAccountRequestSchema
>

export const updateClientBankAccountRequestSchema = Type.Partial(
  Type.Omit(ClientBankAccountDetailsSchema, ['_id'])
)
export type updateClientBankAccountDetailsDTO = Static<
  typeof updateClientBankAccountRequestSchema
>

// 2. Response schema for creating a new Client.
export const createClientBankAccountResponseSchema =
  ClientBankAccountDetailsSchema

export const allBankAccountDetails = Type.Array(ClientBankAccountDetailsSchema)
