"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIssuersFastifySchema = void 0;
const issuers_schema_1 = require("@/domain/issuers/issuers.schema");
exports.getIssuersFastifySchema = {
    summary: 'Get all Issuers',
    tags: ['Issuers'],
    security: [{}],
    response: {
        200: issuers_schema_1.readIssuersResponseSchema
    }
};
//# sourceMappingURL=get-issuers.schema.js.map