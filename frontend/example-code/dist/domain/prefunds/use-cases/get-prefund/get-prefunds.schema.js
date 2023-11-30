"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPrefundFastifySchema = void 0;
const query_param_helpers_1 = require("@/domain/common/query-param-helpers");
const prefunds_schema_1 = require("@/domain/prefunds/prefunds.schema");
exports.getPrefundFastifySchema = {
    summary: 'Get all Prefunds',
    tags: ['Prefunds'],
    security: [{}],
    querystring: (0, query_param_helpers_1.extendQueryParams)(prefunds_schema_1.prefundsSchema),
    response: {
        200: (0, query_param_helpers_1.queryResultSchema)(prefunds_schema_1.prefundsSchema)
    }
};
//# sourceMappingURL=get-prefunds.schema.js.map