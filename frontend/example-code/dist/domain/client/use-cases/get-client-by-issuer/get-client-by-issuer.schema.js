"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getClientByIssuerFastifySchema = void 0;
const client_schema_1 = require("@/domain/client/client.schema");
const type_provider_typebox_1 = require("@fastify/type-provider-typebox");
exports.getClientByIssuerFastifySchema = {
    summary: 'Get client by issuer',
    tags: ['Client'],
    security: [{}],
    headers: type_provider_typebox_1.Type.Object({
        id: type_provider_typebox_1.Type.String()
    }),
    response: {
        200: client_schema_1.readClientResponseSchema
    }
};
//# sourceMappingURL=get-client-by-issuer.schema.js.map