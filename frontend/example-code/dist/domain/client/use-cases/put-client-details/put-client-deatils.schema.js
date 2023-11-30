"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateClientFastifySchema = void 0;
const client_schema_1 = require("@/domain/client/client.schema");
const type_provider_typebox_1 = require("@fastify/type-provider-typebox");
exports.updateClientFastifySchema = {
    summary: 'Update client',
    tags: ['Client'],
    security: [{}],
    params: type_provider_typebox_1.Type.Object({
        id: type_provider_typebox_1.Type.String()
    }),
    body: client_schema_1.updateClientRequestSchema,
    response: {
        200: client_schema_1.updateClientResponseSchema
    }
};
//# sourceMappingURL=put-client-deatils.schema.js.map