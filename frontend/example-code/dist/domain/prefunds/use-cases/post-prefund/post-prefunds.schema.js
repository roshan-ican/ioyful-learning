"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPrefundFastifySchema = void 0;
const prefunds_schema_1 = require("@/domain/prefunds/prefunds.schema");
exports.createPrefundFastifySchema = {
    summary: 'Add new prefund',
    tags: ['Prefunds'],
    security: [{}],
    body: prefunds_schema_1.createPrefundRequestSchema,
    response: {
        200: prefunds_schema_1.createPrefundResponseSchema
    }
};
//# sourceMappingURL=post-prefunds.schema.js.map