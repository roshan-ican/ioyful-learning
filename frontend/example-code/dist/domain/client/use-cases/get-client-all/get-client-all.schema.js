"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getClientFastifySchema = void 0;
const client_schema_1 = require("@/domain/client/client.schema");
const query_param_helpers_1 = require("@/domain/common/query-param-helpers");
exports.getClientFastifySchema = {
    summary: 'Get all clients',
    tags: ['Client'],
    security: [{}],
    querystring: (0, query_param_helpers_1.extendQueryParams)(client_schema_1.clientSchema),
    response: {
        200: (0, query_param_helpers_1.queryResultSchema)(client_schema_1.clientSchema)
    }
};
//# sourceMappingURL=get-client-all.schema.js.map