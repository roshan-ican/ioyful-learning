"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createExampleFastifySchema = void 0;
const example_schema_1 = require("@/domain/example/example.schema");
exports.createExampleFastifySchema = {
    summary: 'Create example schema',
    tags: ['Example'],
    security: [{}],
    headers: example_schema_1.headerSchema,
    body: example_schema_1.createExampleRequestDTO,
    response: {
        200: example_schema_1.readExampleResponseSchema
    }
};
//# sourceMappingURL=create-example.schema.js.map