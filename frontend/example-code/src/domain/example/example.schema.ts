import { Type, Static } from '@fastify/type-provider-typebox'

// Example Schema
export const exampleSchema = Type.Object({
  _id: Type.String(),
  first_name: Type.String(),
  last_name: Type.String(),
  designation: Type.String(),
  employee_code: Type.String(),
  email: Type.String()
})

// Type Alias for Example
export type Example = Static<typeof exampleSchema>

// CRUD Operation Schemas

// 1. Request schema for creating a new example.
export const createExampleSchema = Type.Omit(exampleSchema, ['_id'])

export type createExampleDTO = Static<typeof createExampleSchema>

// 2. Response schema for creating a new example.
export const createExampleResponseDTO = exampleSchema

// 3. Request schema for reading an existing example.
export const readExampleRequestSchema = Type.Object({
  _id: Type.String()
})

// 4. Response schema for reading an existing example.
export const readExampleResponseSchema = exampleSchema

// 5. Request schema for updating an existing example.
export const updateExampleRequestSchema = Type.Object({
  _id: Type.String(),
  example: Type.Partial(exampleSchema)
})

// 6. Response schema for updating an existing example.
export const updateExampleResponseSchema = exampleSchema

// 7. Request schema for deleting an existing example.
export const deleteExampleRequestSchema = Type.Object({
  _id: Type.String()
})

// 8. Response schema for deleting an existing example.
export const deleteExampleResponseSchema = Type.Object({
  message: Type.String()
})

// 9. Request schema for reading existing examples.
export const readExamplesRequestSchema = Type.Object({
  limit: Type.Optional(Type.Number()),
  offset: Type.Optional(Type.Number())
})

// 10. Response schema for reading existing examples.
export const readExamplesResponseSchema = Type.Array(exampleSchema)
