"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProductFastifySchema = void 0;
const product_schema_1 = require("@/domain/products/product.schema");
const type_provider_typebox_1 = require("@fastify/type-provider-typebox");
exports.updateProductFastifySchema = {
    summary: 'update new product',
    tags: ['Products'],
    headers: type_provider_typebox_1.Type.Object({
        id: type_provider_typebox_1.Type.String()
    }),
    body: product_schema_1.updateProductRequestSchema,
    security: [{}],
    response: {
        200: product_schema_1.createProductResponseSchema
    }
};
//# sourceMappingURL=put-products.schema.js.map