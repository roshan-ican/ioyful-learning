"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createIssuersFastifySchema = void 0;
const issuers_schema_1 = require("@/domain/issuers/issuers.schema");
exports.createIssuersFastifySchema = {
    summary: 'Add new Issuer',
    tags: ['Issuers'],
    security: [{}],
    body: issuers_schema_1.issuersSchema,
    response: {
        200: issuers_schema_1.createIssuersResponseSchema
    }
};
//# sourceMappingURL=create-issuers.schema.js.map