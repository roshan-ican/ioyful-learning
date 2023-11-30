"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const get_example_1 = require("@/domain/example/use-cases/get-example");
const get_example_schema_1 = require("@/domain/example/use-cases/get-example/get-example.schema");
const create_example_1 = require("@/domain/example/use-cases/create-example");
const create_example_schema_1 = require("@/domain/example/use-cases/create-example/create-example.schema");
const example = async (fastify, opts) => {
    fastify
        .get('/', { schema: get_example_schema_1.getExampleFastifySchema }, async function (request, reply) {
        return (0, get_example_1.default)();
    })
        .post('/', { schema: create_example_schema_1.createExampleFastifySchema }, async function (request, reply) {
        const example = await (0, create_example_1.default)(request.body);
        console.log(example);
    });
};
exports.default = example;
//# sourceMappingURL=index.js.map