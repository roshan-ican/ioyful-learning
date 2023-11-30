"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const get_prefund_1 = require("@/domain/prefunds/use-cases/get-prefund");
const get_prefunds_schema_1 = require("@/domain/prefunds/use-cases/get-prefund/get-prefunds.schema");
const post_prefunds_usercase_1 = require("@/domain/prefunds/use-cases/post-prefund/post-prefunds.usercase");
const post_prefunds_schema_1 = require("@/domain/prefunds/use-cases/post-prefund/post-prefunds.schema");
const put_prefunds_usercase_1 = require("@/domain/prefunds/use-cases/put-prefund/put-prefunds.usercase");
const put_prefunds_schema_1 = require("@/domain/prefunds/use-cases/put-prefund/put-prefunds.schema");
const get_prefund_by_issuer_usercase_1 = require("@/domain/prefunds/use-cases/get-prefund-by-issuer/get-prefund-by-issuer.usercase");
const product = async (fastify, opts) => {
    fastify
        .withTypeProvider()
        .get('/', { schema: get_prefunds_schema_1.getPrefundFastifySchema }, async function (request, reply) {
        const getAllPrefunds = await (0, get_prefund_1.default)(request.query);
        return getAllPrefunds;
    })
        .get('/issuer', {}, async function (request, reply) {
        return await (0, get_prefund_by_issuer_usercase_1.default)(request.query, request.headers.name);
    })
        .post('/', { schema: post_prefunds_schema_1.createPrefundFastifySchema }, async (request, response) => {
        const createPrefund = await (0, post_prefunds_usercase_1.default)(request.body);
        return createPrefund;
    })
        .put('/', { schema: put_prefunds_schema_1.updatePrefundFastifySchema }, async function (request, response) {
        const updateProd = await (0, put_prefunds_usercase_1.default)(request.headers.id, request.body);
        return updateProd;
    });
};
exports.default = product;
//# sourceMappingURL=index.js.map