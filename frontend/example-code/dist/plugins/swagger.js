"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_plugin_1 = require("fastify-plugin");
const swagger_1 = require("@fastify/swagger");
const swagger_ui_1 = require("@fastify/swagger-ui");
const client_schema_1 = require("@/domain/client/client.schema");
const product_schema_1 = require("@/domain/products/product.schema");
const prefunds_schema_1 = require("@/domain/prefunds/prefunds.schema");
exports.default = (0, fastify_plugin_1.default)(async (fastify) => {
    fastify.register(swagger_1.default, {
        openapi: {
            components: {
                schemas: {
                    Client: client_schema_1.clientSchema,
                    Product: product_schema_1.productsSchema,
                    Prefunds: prefunds_schema_1.prefundsSchema
                }
            },
            info: {
                title: 'PPI Admin Backend API',
                description: '',
                version: '0.1.0'
            },
            servers: [
                {
                    url: `${process.env.BASE_URL}`
                }
            ]
        },
        hideUntagged: false
    });
    fastify.register(swagger_ui_1.default);
});
//# sourceMappingURL=swagger.js.map