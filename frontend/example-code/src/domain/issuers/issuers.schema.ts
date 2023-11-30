import { Type, Static } from '@sinclair/typebox'

export const fixedSchema = Type.Object({
  _id: Type.Optional(Type.String()),
  bank_share: Type.Optional(Type.Number())
})

export const slabSchema = Type.Object({
  _id: Type.Optional(Type.String()),
  min_amount: Type.Optional(Type.Number()),
  max_amount: Type.Optional(Type.Number()),
  bank_share: Type.Optional(Type.Number())
})

export const cardNetworkSchema = Type.Object({
  _id: Type.Optional(Type.String()),
  name: Type.String(),
  card_Type: Type.Array(Type.String())
})

export const CardReloadibilitySchema = Type.Object({
  _id: Type.Optional(Type.String()),
  name: Type.String(),
  slab: Type.Optional(Type.Array(slabSchema)),
  fixed: Type.Optional(fixedSchema)
})

export const issuersSchema = Type.Object({
  _id: Type.Optional(Type.String()),
  name: Type.String(),
  program_type: Type.String(),
  logo_url: Type.String(),
  card_networks: cardNetworkSchema,
  status: Type.Boolean(),
  card_reloadibility_type: CardReloadibilitySchema,
  issuers_logo_path: Type.String(),
})

// Type Alias for Example
export type Issuers = Static<typeof issuersSchema>

export type Fixed = Static<typeof fixedSchema>

export type Slab = Static<typeof slabSchema>

export type CardNetwork = Static<typeof cardNetworkSchema>

export type CardReloadibility = Static<typeof CardReloadibilitySchema>

// CRUD Operation Schemas

// 1. Request schema for creating a new example.
export const updateProductRequestSchema = Type.Partial(
  Type.Omit(issuersSchema, ['_id'])
)

export type updateProductDTO = Static<typeof updateProductRequestSchema>

export type createIssuersRequestDTO = Static<typeof issuersSchema>

export const updateIssuersRequestSchema = Type.Partial(issuersSchema)

export type updateIssuersRequestDTO = Static<typeof updateIssuersRequestSchema>

export const createIssuersResponseSchema = issuersSchema

export const readIssuersResponseSchema = Type.Array(issuersSchema)

// export const createFixedSchemaRequestSchema = Type.Omit(fixedSchema, ['_id']);

export type createFixedSchemaRequestDTO = Static<typeof fixedSchema>

export const createFixedSchemaResponseSchema = fixedSchema

// 2. Request schema for creating a new Slab schema.

// export const createSlabSchemaRequestSchema = Type.Omit(slabSchema, ['_id']);

export type createSlabSchemaRequestDTO = Static<typeof slabSchema>

export const createSlabSchemaResponseSchema = slabSchema

// 3. Request schema for creating a new CardNetwork schema.

// export const createCardNetworkSchemaRequestSchema = Type.Omit(cardNetworkSchema, ['_id']);

export type createCardNetworkSchemaRequestDTO = Static<typeof cardNetworkSchema>

export const createCardNetworkSchemaResponseSchema = cardNetworkSchema

export const updateCardNetworksRequestSchema = Type.Partial(cardNetworkSchema)

export type updateCardNetworkSchemaRequestDTO = Static<
  typeof updateCardNetworksRequestSchema
>
// export const createCardReloadibilitySchemaRequestSchema = Type.Omit(CardReloadibilitySchema, ['_id']);

export const updateCardReloadibilitySchema = Type.Partial(
  CardReloadibilitySchema
)

export type updateCardReloadibilitySchemaRequestDTO = Static<
  typeof updateCardReloadibilitySchema
>

export type createCardReloadibilitySchemaRequestDTO = Static<
  typeof CardReloadibilitySchema
>

export const createCardReloadibilitySchemaResponseSchema =
  CardReloadibilitySchema
