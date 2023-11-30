"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readExamplesResponseSchema = exports.readExamplesRequestSchema = exports.deleteExampleResponseSchema = exports.deleteExampleRequestSchema = exports.updateExampleResponseSchema = exports.updateExampleRequestSchema = exports.readExampleResponseSchema = exports.readExampleRequestSchema = exports.createExampleResponseDTO = exports.createExampleSchema = exports.exampleSchema = void 0;
const type_provider_typebox_1 = require("@fastify/type-provider-typebox");
exports.exampleSchema = type_provider_typebox_1.Type.Object({
    _id: type_provider_typebox_1.Type.String(),
    first_name: type_provider_typebox_1.Type.String(),
    last_name: type_provider_typebox_1.Type.String(),
    designation: type_provider_typebox_1.Type.String(),
    employee_code: type_provider_typebox_1.Type.String(),
    email: type_provider_typebox_1.Type.String()
});
exports.createExampleSchema = type_provider_typebox_1.Type.Omit(exports.exampleSchema, ['_id']);
exports.createExampleResponseDTO = exports.exampleSchema;
exports.readExampleRequestSchema = type_provider_typebox_1.Type.Object({
    _id: type_provider_typebox_1.Type.String()
});
exports.readExampleResponseSchema = exports.exampleSchema;
exports.updateExampleRequestSchema = type_provider_typebox_1.Type.Object({
    _id: type_provider_typebox_1.Type.String(),
    example: type_provider_typebox_1.Type.Partial(exports.exampleSchema)
});
exports.updateExampleResponseSchema = exports.exampleSchema;
exports.deleteExampleRequestSchema = type_provider_typebox_1.Type.Object({
    _id: type_provider_typebox_1.Type.String()
});
exports.deleteExampleResponseSchema = type_provider_typebox_1.Type.Object({
    message: type_provider_typebox_1.Type.String()
});
exports.readExamplesRequestSchema = type_provider_typebox_1.Type.Object({
    limit: type_provider_typebox_1.Type.Optional(type_provider_typebox_1.Type.Number()),
    offset: type_provider_typebox_1.Type.Optional(type_provider_typebox_1.Type.Number())
});
exports.readExamplesResponseSchema = type_provider_typebox_1.Type.Array(exports.exampleSchema);
//# sourceMappingURL=example.schema.js.map