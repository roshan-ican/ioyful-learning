"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getClientByIdentifierFastifySchema = void 0;
const client_schema_1 = require("@/domain/client/client.schema");
const type_provider_typebox_1 = require("@fastify/type-provider-typebox");
exports.getClientByIdentifierFastifySchema = {
    summary: 'Get client by identifier',
    tags: ['Client'],
    security: [{}],
    headers: type_provider_typebox_1.Type.Object({
        id: type_provider_typebox_1.Type.String()
    }),
    response: {
        200: client_schema_1.readClientResponseSchema
    }
};
//# sourceMappingURL=get-client-by-id.schema.js.map