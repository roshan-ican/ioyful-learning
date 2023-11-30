"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.headerSchema = exports.readExamplesResponseSchema = exports.readExamplesRequestSchema = exports.deleteExampleResponseSchema = exports.deleteExampleRequestSchema = exports.updateExampleResponseSchema = exports.updateExampleRequestSchema = exports.readExampleResponseSchema = exports.readExampleRequestSchema = exports.createExampleResponseDTO = exports.createExampleRequestDTO = exports.exampleSchema = void 0;
const typebox_1 = require("@sinclair/typebox");
exports.exampleSchema = typebox_1.Type.Object({
    _id: typebox_1.Type.String(),
    first_name: typebox_1.Type.String(),
    last_name: typebox_1.Type.String(),
    designation: typebox_1.Type.String(),
    employee_code: typebox_1.Type.String(),
    email: typebox_1.Type.String()
});
exports.createExampleRequestDTO = typebox_1.Type.Omit(exports.exampleSchema, ['_id']);
exports.createExampleResponseDTO = exports.exampleSchema;
exports.readExampleRequestSchema = typebox_1.Type.Object({
    _id: typebox_1.Type.String()
});
exports.readExampleResponseSchema = exports.exampleSchema;
exports.updateExampleRequestSchema = typebox_1.Type.Object({
    _id: typebox_1.Type.String(),
    example: typebox_1.Type.Partial(exports.exampleSchema)
});
exports.updateExampleResponseSchema = exports.exampleSchema;
exports.deleteExampleRequestSchema = typebox_1.Type.Object({
    _id: typebox_1.Type.String()
});
exports.deleteExampleResponseSchema = typebox_1.Type.Object({
    message: typebox_1.Type.String()
});
exports.readExamplesRequestSchema = typebox_1.Type.Object({
    limit: typebox_1.Type.Optional(typebox_1.Type.Number()),
    offset: typebox_1.Type.Optional(typebox_1.Type.Number())
});
exports.readExamplesResponseSchema = typebox_1.Type.Array(exports.exampleSchema);
exports.headerSchema = typebox_1.Type.Object({
    authId: typebox_1.Type.String()
});
//# sourceMappingURL=example.schema.js.map