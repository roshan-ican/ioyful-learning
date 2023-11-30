"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateIssuersFastifySchema = void 0;
const issuers_schema_1 = require("@/domain/issuers/issuers.schema");
exports.updateIssuersFastifySchema = {
    summary: 'Update Issuer',
    tags: ['Issuers'],
    security: [{}],
    body: issuers_schema_1.updateIssuersRequestSchema,
    response: {
        200: {},
    }
};
//# sourceMappingURL=update-issuers.schema.js.map