/* eslint-disable @typescript-eslint/no-explicit-any */
import { TObject, Type } from '@fastify/type-provider-typebox'

const QueryOptionsSchema = Type.Object({
  sortBy: Type.Optional(Type.String()),
  projectBy: Type.Optional(Type.String()),
  populate: Type.Optional(Type.String()),
  limit: Type.Optional(Type.Number()),
  page: Type.Optional(Type.Number())
})

export const extendQueryParams = (schema: TObject) => {
  const optionalSchema = Type.Object({
    ...Object.entries(schema.properties).reduce((acc, [key, value]) => {
      acc[key] = Type.Optional(value) // Mark the property as optional
      return acc
    }, {} as Record<string, any>)
  })
  
  return Type.Intersect([optionalSchema, QueryOptionsSchema])
}

export const queryResultSchema = (itemSchema: TObject): TObject =>
  Type.Object({
    results: Type.Array(itemSchema),
    page: Type.Number(),
    limit: Type.Number(),
    totalPages: Type.Number(),
    totalResults: Type.Number()
  })
