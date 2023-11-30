// import kits from '@/entry-points/http/kits';
import { Type, Static } from '@sinclair/typebox'

export const kitsSchema = Type.Object({
  _id: Type.Optional(Type.String()),
  kit_number: Type.String(),
  kit_type: Type.String(),
  product: Type.String(),
  issuer: Type.String(),
  assigned_client_id: Type.String(),
  client_id: Type.String(),
  remark: Type.String(),
  status: Type.String()
})

export const kitRequestSchema = Type.Array(
  Type.Object({
    kit_number: Type.String({
      minLength: 1,
      maxLength: 15,
      pattern: '^[0-9]+$'
    }),
    kit_type: Type.Union([Type.Literal('PHYSICAL'), Type.Literal('VIRTUAL')])
  })
)

export type BulkKitsRequest = Static<typeof kitRequestSchema>

export type Kits = Static<typeof kitsSchema>
