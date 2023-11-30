import { Type, Static } from '@fastify/type-provider-typebox'

export const ClientDepositBankAccountDetailsSchema = Type.Object({
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
export type clientDepositeBankAccountDetails = Static<
  typeof ClientDepositBankAccountDetailsSchema
>

// CRUD Operation Schemas

// 1. Request schema for creating a new Client.
export const createClientDepositeBankAccountRequestSchema = Type.Omit(
  ClientDepositBankAccountDetailsSchema,
  ['_id']
)

export type createClientDepositeBankAccountDetailsDTO = Static<
  typeof createClientDepositeBankAccountRequestSchema
>

export const updateClientDepositeBankAccountRequestSchema = Type.Partial(
  Type.Omit(ClientDepositBankAccountDetailsSchema, ['_id'])
)

export type updateClientDepositeBankAccountDetailsDTO = Static<
  typeof createClientDepositeBankAccountRequestSchema
>

// 2. Response schema for creating a new Client.
export const createClientDepositeBankAccountResponseSchema =
  ClientDepositBankAccountDetailsSchema

export const allClientsDepositeBankAccounts = Type.Array(
  ClientDepositBankAccountDetailsSchema
)
