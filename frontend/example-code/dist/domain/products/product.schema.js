"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readProductsResponseSchema = exports.readProductsRequestSchema = exports.deleteProductResponseSchema = exports.deleteProductRequestSchema = exports.updateProductResponseSchema = exports.updateProductRequestSchema = exports.readProductResponseSchema = exports.readProductRequestSchema = exports.createProductResponseSchema = exports.createProductRequestSchema = exports.productsSchema = void 0;
const type_provider_typebox_1 = require("@fastify/type-provider-typebox");
exports.productsSchema = type_provider_typebox_1.Type.Object({
    _id: type_provider_typebox_1.Type.String(),
    name: type_provider_typebox_1.Type.String({
        minLength: 1,
        maxLength: 15,
        pattern: '^[a-zA-Z\\s]+$'
    }),
    description: type_provider_typebox_1.Type.String({
        minLength: 1,
        maxLength: 50,
        pattern: '^[a-zA-Z0-9\\s]+$'
    }),
    logo_url: type_provider_typebox_1.Type.String({ minLength: 1, maxLength: 15 }),
    isActive: type_provider_typebox_1.Type.Boolean(),
    created_at: type_provider_typebox_1.Type.Optional(type_provider_typebox_1.Type.String()),
    updated_at: type_provider_typebox_1.Type.Optional(type_provider_typebox_1.Type.String()),
    created_by: type_provider_typebox_1.Type.Optional(type_provider_typebox_1.Type.String()),
    updated_by: type_provider_typebox_1.Type.Optional(type_provider_typebox_1.Type.String())
});
exports.createProductRequestSchema = type_provider_typebox_1.Type.Omit(exports.productsSchema, [
    '_id',
    'isActive'
]);
exports.createProductResponseSchema = exports.productsSchema;
exports.readProductRequestSchema = type_provider_typebox_1.Type.Object({
    _id: type_provider_typebox_1.Type.String()
});
exports.readProductResponseSchema = exports.productsSchema;
exports.updateProductRequestSchema = type_provider_typebox_1.Type.Partial(type_provider_typebox_1.Type.Omit(exports.productsSchema, ['_id']));
exports.updateProductResponseSchema = exports.productsSchema;
exports.deleteProductRequestSchema = type_provider_typebox_1.Type.Object({
    _id: type_provider_typebox_1.Type.String()
});
exports.deleteProductResponseSchema = type_provider_typebox_1.Type.Object({
    message: type_provider_typebox_1.Type.String()
});
exports.readProductsRequestSchema = type_provider_typebox_1.Type.Object({
    limit: type_provider_typebox_1.Type.Optional(type_provider_typebox_1.Type.Number()),
    offset: type_provider_typebox_1.Type.Optional(type_provider_typebox_1.Type.Number())
});
exports.readProductsResponseSchema = type_provider_typebox_1.Type.Array(exports.productsSchema);
//# sourceMappingURL=product.schema.js.map