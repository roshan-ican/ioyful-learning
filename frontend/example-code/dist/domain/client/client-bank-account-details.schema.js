"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allBankAccountDetails = exports.createClientBankAccountResponseSchema = exports.updateClientBankAccountRequestSchema = exports.createClientBankAccountRequestSchema = exports.ClientBankAccountDetailsSchema = void 0;
const type_provider_typebox_1 = require("@fastify/type-provider-typebox");
exports.ClientBankAccountDetailsSchema = type_provider_typebox_1.Type.Object({
    _id: type_provider_typebox_1.Type.Optional(type_provider_typebox_1.Type.Any()),
    account_number: type_provider_typebox_1.Type.Optional(type_provider_typebox_1.Type.String()),
    ifsc: type_provider_typebox_1.Type.Optional(type_provider_typebox_1.Type.String()),
    clientHashId: type_provider_typebox_1.Type.Optional(type_provider_typebox_1.Type.String()),
    name: type_provider_typebox_1.Type.Optional(type_provider_typebox_1.Type.String()),
    created_at: type_provider_typebox_1.Type.Optional(type_provider_typebox_1.Type.String()),
    updated_at: type_provider_typebox_1.Type.Optional(type_provider_typebox_1.Type.String()),
    updated_by: type_provider_typebox_1.Type.Optional(type_provider_typebox_1.Type.String()),
    created_by: type_provider_typebox_1.Type.Optional(type_provider_typebox_1.Type.String())
});
exports.createClientBankAccountRequestSchema = type_provider_typebox_1.Type.Omit(exports.ClientBankAccountDetailsSchema, ['_id']);
exports.updateClientBankAccountRequestSchema = type_provider_typebox_1.Type.Partial(type_provider_typebox_1.Type.Omit(exports.ClientBankAccountDetailsSchema, ['_id']));
exports.createClientBankAccountResponseSchema = exports.ClientBankAccountDetailsSchema;
exports.allBankAccountDetails = type_provider_typebox_1.Type.Array(exports.ClientBankAccountDetailsSchema);
//# sourceMappingURL=client-bank-account-details.schema.js.map