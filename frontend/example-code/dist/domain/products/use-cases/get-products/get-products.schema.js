"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProductFastifySchema = void 0;
const product_schema_1 = require("@/domain/products/product.schema");
const query_param_helpers_1 = require("@/domain/common/query-param-helpers");
exports.getProductFastifySchema = {
    summary: 'Get all products',
    tags: ['Products'],
    security: [{}],
    querystring: (0, query_param_helpers_1.extendQueryParams)(product_schema_1.productsSchema),
    response: {
        200: (0, query_param_helpers_1.queryResultSchema)(product_schema_1.productsSchema)
    }
};
//# sourceMappingURL=get-products.schema.js.map