import { Type, Static } from '@sinclair/typebox'

export const kitsUploadLedgerSchema = Type.Object({
  _id: Type.Optional(Type.String()),
  storageLink: Type.Optional(Type.String()),
  createdAt: Type.Date(),
  modifiedBy: Type.Optional(Type.String()),
  modifiedAt: Type.Optional(Type.Date()),
  remark: Type.Optional(Type.String()),
  status: Type.String()
})

export type KitsUploadLedger = Static<typeof kitsUploadLedgerSchema>
