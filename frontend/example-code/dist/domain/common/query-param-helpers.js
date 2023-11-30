"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryResultSchema = exports.extendQueryParams = void 0;
const type_provider_typebox_1 = require("@fastify/type-provider-typebox");
const QueryOptionsSchema = type_provider_typebox_1.Type.Object({
    sortBy: type_provider_typebox_1.Type.Optional(type_provider_typebox_1.Type.String()),
    projectBy: type_provider_typebox_1.Type.Optional(type_provider_typebox_1.Type.String()),
    populate: type_provider_typebox_1.Type.Optional(type_provider_typebox_1.Type.String()),
    limit: type_provider_typebox_1.Type.Optional(type_provider_typebox_1.Type.Number()),
    page: type_provider_typebox_1.Type.Optional(type_provider_typebox_1.Type.Number())
});
const extendQueryParams = (schema) => {
    const optionalSchema = type_provider_typebox_1.Type.Object({
        ...Object.entries(schema.properties).reduce((acc, [key, value]) => {
            acc[key] = type_provider_typebox_1.Type.Optional(value);
            return acc;
        }, {})
    });
    return type_provider_typebox_1.Type.Intersect([optionalSchema, QueryOptionsSchema]);
};
exports.extendQueryParams = extendQueryParams;
const queryResultSchema = (itemSchema) => type_provider_typebox_1.Type.Object({
    results: type_provider_typebox_1.Type.Array(itemSchema),
    page: type_provider_typebox_1.Type.Number(),
    limit: type_provider_typebox_1.Type.Number(),
    totalPages: type_provider_typebox_1.Type.Number(),
    totalResults: type_provider_typebox_1.Type.Number()
});
exports.queryResultSchema = queryResultSchema;
//# sourceMappingURL=query-param-helpers.js.map