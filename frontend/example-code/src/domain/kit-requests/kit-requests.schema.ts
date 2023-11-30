// import kits from '@/entry-points/http/kits';
import { Type, Static } from '@sinclair/typebox'

export const kitsRequestsSchema = Type.Object({
  _id: Type.Optional(Type.String()),
  request_count: Type.Number(),
  kit_type: Type.Union([Type.Literal('PHYSICAL'), Type.Literal('VIRTUAL')]),
  product: Type.String(),
  issuer: Type.String(),
  client_id: Type.String(),
  remark: Type.String(),
  status: Type.String(),
    business_name: Type.Optional(Type.String()),
  program_manager: Type.Optional(Type.String()),
  card_type: Type.Optional(Type.String()),
  card_variant: Type.Optional(Type.String()),
  card_design: Type.Optional(Type.String()),
})

export const createKitsRequestDTO = Type.Omit(kitsRequestsSchema, ['_id','status','remark'])

export const updateKitsRequestsDTO = Type.Object({
  request_count: Type.Optional(Type.Number()),
  kit_type: Type.Optional(
    Type.Union([Type.Literal('PHYSICAL'), Type.Literal('VIRTUAL')])
  ),
  product: Type.Optional(Type.String()),
  issuer: Type.Optional(Type.String()),
  client_id: Type.Optional(Type.String()),
  remark: Type.Optional(Type.String()),
  status: Type.Optional(Type.String()),
  business_name: Type.Optional(Type.String()),
  program_manager: Type.Optional(Type.String()),
  card_type: Type.Optional(Type.String()),
  card_variant: Type.Optional(Type.String()),
  card_design: Type.Optional(Type.String())
})


export type KitsRequests = Static<typeof kitsRequestsSchema>
