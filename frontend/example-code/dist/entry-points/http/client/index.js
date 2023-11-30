"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const get_client_by_id_schema_1 = require("@/domain/client/use-cases/get-client-by-id/get-client-by-id.schema");
const index_1 = require("@/domain/client/use-cases/post-client/index");
const post_client_schema_1 = require("@/domain/client/use-cases/post-client/post-client.schema");
const put_client_details_usecase_1 = require("@/domain/client/use-cases/put-client-details/put-client-details.usecase");
const put_client_deatils_schema_1 = require("@/domain/client/use-cases/put-client-details/put-client-deatils.schema");
const get_client_all_usecase_1 = require("@/domain/client/use-cases/get-client-all/get-client-all.usecase");
const get_client_by_id_usercase_1 = require("@/domain/client/use-cases/get-client-by-id/get-client-by-id.usercase");
const get_client_by_email_usecase_1 = require("@/domain/client/use-cases/get-client-by-email/get-client-by-email.usecase");
const get_client_by_email_schema_1 = require("@/domain/client/use-cases/get-client-by-email/get-client-by-email.schema");
const get_client_by_issuer_usercase_1 = require("@/domain/client/use-cases/get-client-by-issuer/get-client-by-issuer.usercase");
const client = async (fastify, opts) => {
    fastify
        .withTypeProvider()
        .get('/', {}, async function (request, reply) {
        const allClients = await (0, get_client_all_usecase_1.default)(request.query);
        reply.send(allClients);
    })
        .get('/issuer', {}, async function (request, reply) {
        return await (0, get_client_by_issuer_usercase_1.default)(request.query, request.headers.name);
    })
        .get('/identifier', { schema: get_client_by_id_schema_1.getClientByIdentifierFastifySchema }, async function (request, reply) {
        const client = await (0, get_client_by_id_usercase_1.default)(request.headers.id);
        reply.send(client);
    })
        .get('/email', { schema: get_client_by_email_schema_1.getClientByEmailFastifySchema }, async function (request, reply) {
        const client = await (0, get_client_by_email_usecase_1.default)(request.headers.email);
        return client;
    })
        .post('/', { schema: post_client_schema_1.createClientFastifySchema }, async function (request, reply) {
        const createdClient = await (0, index_1.createNewClient)(request.body);
        reply.send(createdClient);
    })
        .put('/:id', { schema: put_client_deatils_schema_1.updateClientFastifySchema }, async function (request, reply) {
        const updatedClient = await (0, put_client_details_usecase_1.updateClientDetails)(request.params.id, request.body);
        reply.send(updatedClient);
    });
};
exports.default = client;
//# sourceMappingURL=index.js.map