"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getClientByEmailFastifySchema = void 0;
const client_schema_1 = require("@/domain/client/client.schema");
const type_provider_typebox_1 = require("@fastify/type-provider-typebox");
exports.getClientByEmailFastifySchema = {
    summary: 'Get client by Email',
    tags: ['Client'],
    security: [{}],
    headers: type_provider_typebox_1.Type.Object({
        email: type_provider_typebox_1.Type.String()
    }),
    response: {
        200: client_schema_1.readClientResponseSchema
    }
};
//# sourceMappingURL=get-client-by-email.schema.js.map