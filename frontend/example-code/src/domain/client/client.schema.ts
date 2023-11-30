import { Type, Static } from '@fastify/type-provider-typebox'
import { ClientBankAccountDetailsSchema } from '@/domain/client/client-bank-account-details.schema'
import { ClientDepositBankAccountDetailsSchema } from '@/domain/client/client-deposit-bank-account-details.schema'
import { StageEnum } from '@/common/enums'
import { ClientsWalletsSchema } from './client-wallet.schema'
import { issuersSchema } from '../issuers/issuers.schema'

// Client Schema
export const clientSchema = Type.Object({
  _id: Type.Optional(Type.Any()),
  buissness_name: Type.String({ minLength: 1 }),
  product_type: Type.Array(Type.String()),
  client_type: Type.Array(Type.String()),
  card_network: Type.String(),
  mobile_number: Type.String({
    pattern: '^\\d{10}$'
  }),
  email: Type.String({ format: 'email' }),
  issuer: Type.Partial(Type.Array(Type.Partial(issuersSchema))),
  stage: Type.Enum(StageEnum),
  isActive: Type.Optional(Type.Boolean({ default: true })),
  clientHashId: Type.Optional(Type.String()),
  name: Type.String(),
  nkPoc: Type.String(),
  client_bank: Type.Optional(ClientBankAccountDetailsSchema),
  client_deposit_bank: Type.Optional(ClientDepositBankAccountDetailsSchema),
  client_wallet: Type.Optional(ClientsWalletsSchema),
  created_at: Type.Optional(Type.String()),
  updated_at: Type.Optional(Type.String())
})

// Type Alias for Client
export type client = Static<typeof clientSchema>

// CRUD Operation Schemas

// 1. Request schema for creating a new Client.
export const createClientRequestSchema = Type.Omit(clientSchema, [
  'isActive',
  '_id'
])
export type createClientDTO = Static<typeof createClientRequestSchema>

// 2. Response schema for creating a new Client.
export const createClientResponseSchema = clientSchema

// 3. Request schema for reading an existing Client.
export const readClientRequestSchema = Type.Object({
  id: Type.Integer()
})

// 4. Response schema for reading an existing Client.
export const readClientResponseSchema = clientSchema

// 5. Request schema for updating an existing Client.
export const updateClientRequestSchema = Type.Optional(
  Type.Partial(Type.Omit(clientSchema, ['_id']))
)
export type updateClientDTO = Static<typeof updateClientRequestSchema>

// 6. Response schema for updating an existing Client.
export const updateClientResponseSchema = clientSchema

// 7. Request schema for deleting an existing Client.
export const deleteClientRequestSchema = Type.Object({
  id: Type.Integer()
})

// 8. Response schema for deleting an existing Client.
export const deleteClientResponseSchema = Type.Object({
  message: Type.String()
})

// 9. Request schema for reading existing Clients.
export const readClientsRequestSchema = Type.Object({
  limit: Type.Optional(Type.Number()),
  offset: Type.Optional(Type.Number())
})

// 10. Response schema for reading existing Clients.
export const readClientsResponseSchema = Type.Array(
  Type.Omit(clientSchema, ['_id'])
)

// 11. update client bank details
export const updateClientBankRequestSchema = Type.Object({
  client_bank: Type.Optional(
    Type.Object({
      account_number: Type.Optional(Type.String()),
      ifsc: Type.Optional(Type.String())
    })
  )
})
export type updateClientBankDTO = Static<typeof updateClientBankRequestSchema>
