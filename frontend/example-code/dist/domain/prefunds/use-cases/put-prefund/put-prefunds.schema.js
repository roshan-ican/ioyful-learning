"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePrefundFastifySchema = void 0;
const prefunds_schema_1 = require("@/domain/prefunds/prefunds.schema");
const type_provider_typebox_1 = require("@fastify/type-provider-typebox");
exports.updatePrefundFastifySchema = {
    summary: 'update new prefund',
    tags: ['Prefunds'],
    headers: type_provider_typebox_1.Type.Object({
        id: type_provider_typebox_1.Type.String()
    }),
    body: prefunds_schema_1.updatePrefundRequestSchema,
    security: [{}],
    response: {
        200: prefunds_schema_1.createPrefundResponseSchema
    }
};
//# sourceMappingURL=put-prefunds.schema.js.map