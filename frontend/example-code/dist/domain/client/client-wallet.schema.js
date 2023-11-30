"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allBankAccountDetails = exports.createClientBankAccountResponseSchema = exports.updateClientBankAccountRequestSchema = exports.createClientBankAccountRequestSchema = exports.ClientsWalletsSchema = void 0;
const type_provider_typebox_1 = require("@fastify/type-provider-typebox");
exports.ClientsWalletsSchema = type_provider_typebox_1.Type.Object({
    _id: type_provider_typebox_1.Type.Optional(type_provider_typebox_1.Type.Any()),
    total_credits: type_provider_typebox_1.Type.Optional(type_provider_typebox_1.Type.String()),
    total_debits: type_provider_typebox_1.Type.Optional(type_provider_typebox_1.Type.String({ pattern: '^\\d+(\\.\\d+)?$' })),
    clientHashId: type_provider_typebox_1.Type.Optional(type_provider_typebox_1.Type.String({ pattern: '^\\d+(\\.\\d+)?$' })),
    created_at: type_provider_typebox_1.Type.Optional(type_provider_typebox_1.Type.String()),
    updated_at: type_provider_typebox_1.Type.Optional(type_provider_typebox_1.Type.String()),
    updated_by: type_provider_typebox_1.Type.Optional(type_provider_typebox_1.Type.String()),
    created_by: type_provider_typebox_1.Type.Optional(type_provider_typebox_1.Type.String())
});
exports.createClientBankAccountRequestSchema = type_provider_typebox_1.Type.Omit(exports.ClientsWalletsSchema, ['_id']);
exports.updateClientBankAccountRequestSchema = type_provider_typebox_1.Type.Partial(type_provider_typebox_1.Type.Omit(exports.ClientsWalletsSchema, ['_id']));
exports.createClientBankAccountResponseSchema = exports.ClientsWalletsSchema;
exports.allBankAccountDetails = type_provider_typebox_1.Type.Array(exports.ClientsWalletsSchema);
//# sourceMappingURL=client-wallet.schema.js.map