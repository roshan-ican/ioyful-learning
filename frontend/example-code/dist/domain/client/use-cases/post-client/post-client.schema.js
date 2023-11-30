"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createClientFastifySchema = void 0;
const client_schema_1 = require("@/domain/client/client.schema");
exports.createClientFastifySchema = {
    summary: 'onboard client',
    tags: ['Client'],
    security: [{}],
    body: client_schema_1.createClientRequestSchema,
    response: {
        200: client_schema_1.createClientResponseSchema
    }
};
//# sourceMappingURL=post-client.schema.js.map