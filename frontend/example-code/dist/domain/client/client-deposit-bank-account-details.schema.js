"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allClientsDepositeBankAccounts = exports.createClientDepositeBankAccountResponseSchema = exports.updateClientDepositeBankAccountRequestSchema = exports.createClientDepositeBankAccountRequestSchema = exports.ClientDepositBankAccountDetailsSchema = void 0;
const type_provider_typebox_1 = require("@fastify/type-provider-typebox");
exports.ClientDepositBankAccountDetailsSchema = type_provider_typebox_1.Type.Object({
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
exports.createClientDepositeBankAccountRequestSchema = type_provider_typebox_1.Type.Omit(exports.ClientDepositBankAccountDetailsSchema, ['_id']);
exports.updateClientDepositeBankAccountRequestSchema = type_provider_typebox_1.Type.Partial(type_provider_typebox_1.Type.Omit(exports.ClientDepositBankAccountDetailsSchema, ['_id']));
exports.createClientDepositeBankAccountResponseSchema = exports.ClientDepositBankAccountDetailsSchema;
exports.allClientsDepositeBankAccounts = type_provider_typebox_1.Type.Array(exports.ClientDepositBankAccountDetailsSchema);
//# sourceMappingURL=client-deposit-bank-account-details.schema.js.map