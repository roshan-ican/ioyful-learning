import { Type, Static } from '@fastify/type-provider-typebox'

export const ClientsWalletsSchema = Type.Object({
  _id: Type.Optional(Type.Any()),
  total_credits: Type.Optional(Type.String()),
  total_debits: Type.Optional(Type.String({ pattern: '^\\d+(\\.\\d+)?$' })),
  clientHashId: Type.Optional(Type.String({ pattern: '^\\d+(\\.\\d+)?$' })),
  created_at: Type.Optional(Type.String()),
  updated_at: Type.Optional(Type.String()),
  updated_by: Type.Optional(Type.String()),
  created_by: Type.Optional(Type.String())
})

// Type Alias for Client
export type clientsWallets = Static<typeof ClientsWalletsSchema>

// CRUD Operation Schemas

// 1. Request schema for creating a new Client.
export const createClientBankAccountRequestSchema = Type.Omit(
  ClientsWalletsSchema,
  ['_id']
)
export type createClientsWalletsDTO = Static<
  typeof createClientBankAccountRequestSchema
>

export const updateClientBankAccountRequestSchema = Type.Partial(
  Type.Omit(ClientsWalletsSchema, ['_id'])
)
export type updateClientsWalletsDTO = Static<
  typeof updateClientBankAccountRequestSchema
>

// 2. Response schema for creating a new Client.
export const createClientBankAccountResponseSchema = ClientsWalletsSchema

export const allBankAccountDetails = Type.Array(ClientsWalletsSchema)
