import { Type, Static } from '@fastify/type-provider-typebox'

// Products Schema
export const productsSchema = Type.Object({
  _id: Type.String(),
  name: Type.String({
    minLength: 1,
    maxLength: 15,
    pattern: '^[a-zA-Z\\s]+$'
  }),
  description: Type.String({
    minLength: 1,
    maxLength: 50,
    pattern: '^[a-zA-Z0-9\\s]+$'
  }),
  logo_url: Type.String({ minLength: 1, maxLength: 15 }),
  isActive: Type.Boolean(),
  created_at: Type.Optional(Type.String()),
  updated_at: Type.Optional(Type.String()),
  created_by: Type.Optional(Type.String()),
  updated_by: Type.Optional(Type.String())
})

// Type Alias for Product
export type Product = Static<typeof productsSchema>

// CRUD Operation Schemas

// 1. Request schema for creating a new Product.
export const createProductRequestSchema = Type.Omit(productsSchema, [
  '_id',
  'isActive'
])
export type createProductDTO = Static<typeof createProductRequestSchema>

// 2. Response schema for creating a new Product.
export const createProductResponseSchema = productsSchema

// 3. Request schema for reading an existing Product.
export const readProductRequestSchema = Type.Object({
  _id: Type.String()
})

// 4. Response schema for reading an existing Product.
export const readProductResponseSchema = productsSchema

// 5. Request schema for updating an existing Product.
// export const updateProductRequestSchema = Type.Object({
//   _id: Type.String(),
//   example: Type.Partial(productsSchema)
// })

export const updateProductRequestSchema = Type.Partial(
  Type.Omit(productsSchema, ['_id'])
)
export type updateProductDTO = Static<typeof updateProductRequestSchema>

// 6. Response schema for updating an existing Product.
export const updateProductResponseSchema = productsSchema

// 7. Request schema for deleting an existing Product.
export const deleteProductRequestSchema = Type.Object({
  _id: Type.String()
})

// 8. Response schema for deleting an existing Product.
export const deleteProductResponseSchema = Type.Object({
  message: Type.String()
})

// 9. Request schema for reading existing Product.
export const readProductsRequestSchema = Type.Object({
  limit: Type.Optional(Type.Number()),
  offset: Type.Optional(Type.Number())
})

// 10. Response schema for reading existing Product.
export const readProductsResponseSchema = Type.Array(
  productsSchema
)
