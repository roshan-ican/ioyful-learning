"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getClientByIssuerFastifySchema = void 0;
const type_provider_typebox_1 = require("@fastify/type-provider-typebox");
const prefunds_schema_1 = require("../../prefunds.schema");
exports.getClientByIssuerFastifySchema = {
    summary: 'Get prefund by issuer',
    tags: ['Prefund'],
    security: [{}],
    headers: type_provider_typebox_1.Type.Object({
        id: type_provider_typebox_1.Type.String()
    }),
    response: {
        200: prefunds_schema_1.readPrefundResponseSchema
    }
};
//# sourceMappingURL=get-prefund-by-issuer.schema.js.map