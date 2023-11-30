"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProductFastifySchema = void 0;
const product_schema_1 = require("@/domain/products/product.schema");
exports.createProductFastifySchema = {
    summary: 'Add new product',
    tags: ['Products'],
    security: [{}],
    body: product_schema_1.createProductRequestSchema,
    response: {
        200: product_schema_1.createProductResponseSchema
    }
};
//# sourceMappingURL=post-products.schema.js.map