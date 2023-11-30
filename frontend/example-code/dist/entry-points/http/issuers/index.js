"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const get_issuers_1 = require("@/domain/issuers/use-cases/get-issuers");
const create_issuers_1 = require("@/domain/issuers/use-cases/create-issuers");
const update_issuers_schema_1 = require("@/domain/issuers/use-cases/update-issuers/update-issuers.schema");
const update_issuers_usecase_1 = require("@/domain/issuers/use-cases/update-issuers/update-issuers.usecase");
const issuers = async (fastify, opts) => {
    fastify
        .withTypeProvider()
        .get('/', { schema: {} }, async function (request, reply) {
        return await (0, get_issuers_1.default)();
    })
        .post('/', async function (request, reply) {
        const issuersResponse = await (0, create_issuers_1.default)(request.body);
        return issuersResponse;
    })
        .patch('/', { schema: update_issuers_schema_1.updateIssuersFastifySchema }, async function (request, reply) {
        const issuersResponse = await (0, update_issuers_usecase_1.default)(request.body);
        return issuersResponse;
    });
};
exports.default = issuers;
//# sourceMappingURL=index.js.map