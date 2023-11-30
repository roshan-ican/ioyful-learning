"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateClientBankRequestSchema = exports.readClientsResponseSchema = exports.readClientsRequestSchema = exports.deleteClientResponseSchema = exports.deleteClientRequestSchema = exports.updateClientResponseSchema = exports.updateClientRequestSchema = exports.readClientResponseSchema = exports.readClientRequestSchema = exports.createClientResponseSchema = exports.createClientRequestSchema = exports.clientSchema = void 0;
const type_provider_typebox_1 = require("@fastify/type-provider-typebox");
const client_bank_account_details_schema_1 = require("@/domain/client/client-bank-account-details.schema");
const client_deposit_bank_account_details_schema_1 = require("@/domain/client/client-deposit-bank-account-details.schema");
const enums_1 = require("@/common/enums");
const client_wallet_schema_1 = require("./client-wallet.schema");
const issuers_schema_1 = require("../issuers/issuers.schema");
exports.clientSchema = type_provider_typebox_1.Type.Object({
    _id: type_provider_typebox_1.Type.Optional(type_provider_typebox_1.Type.Any()),
    buissness_name: type_provider_typebox_1.Type.String({ minLength: 1 }),
    product_type: type_provider_typebox_1.Type.Array(type_provider_typebox_1.Type.String()),
    client_type: type_provider_typebox_1.Type.Array(type_provider_typebox_1.Type.String()),
    card_network: type_provider_typebox_1.Type.String(),
    mobile_number: type_provider_typebox_1.Type.String({
        pattern: '^\\d{10}$'
    }),
    email: type_provider_typebox_1.Type.String({ format: 'email' }),
    issuer: type_provider_typebox_1.Type.Partial(type_provider_typebox_1.Type.Array(type_provider_typebox_1.Type.Partial(issuers_schema_1.issuersSchema))),
    stage: type_provider_typebox_1.Type.Enum(enums_1.StageEnum),
    isActive: type_provider_typebox_1.Type.Optional(type_provider_typebox_1.Type.Boolean({ default: true })),
    clientHashId: type_provider_typebox_1.Type.Optional(type_provider_typebox_1.Type.String()),
    name: type_provider_typebox_1.Type.String(),
    nkPoc: type_provider_typebox_1.Type.String(),
    client_bank: type_provider_typebox_1.Type.Optional(client_bank_account_details_schema_1.ClientBankAccountDetailsSchema),
    client_deposit_bank: type_provider_typebox_1.Type.Optional(client_deposit_bank_account_details_schema_1.ClientDepositBankAccountDetailsSchema),
    client_wallet: type_provider_typebox_1.Type.Optional(client_wallet_schema_1.ClientsWalletsSchema),
    created_at: type_provider_typebox_1.Type.Optional(type_provider_typebox_1.Type.String()),
    updated_at: type_provider_typebox_1.Type.Optional(type_provider_typebox_1.Type.String())
});
exports.createClientRequestSchema = type_provider_typebox_1.Type.Omit(exports.clientSchema, [
    'isActive',
    '_id'
]);
exports.createClientResponseSchema = exports.clientSchema;
exports.readClientRequestSchema = type_provider_typebox_1.Type.Object({
    id: type_provider_typebox_1.Type.Integer()
});
exports.readClientResponseSchema = exports.clientSchema;
exports.updateClientRequestSchema = type_provider_typebox_1.Type.Optional(type_provider_typebox_1.Type.Partial(type_provider_typebox_1.Type.Omit(exports.clientSchema, ['_id'])));
exports.updateClientResponseSchema = exports.clientSchema;
exports.deleteClientRequestSchema = type_provider_typebox_1.Type.Object({
    id: type_provider_typebox_1.Type.Integer()
});
exports.deleteClientResponseSchema = type_provider_typebox_1.Type.Object({
    message: type_provider_typebox_1.Type.String()
});
exports.readClientsRequestSchema = type_provider_typebox_1.Type.Object({
    limit: type_provider_typebox_1.Type.Optional(type_provider_typebox_1.Type.Number()),
    offset: type_provider_typebox_1.Type.Optional(type_provider_typebox_1.Type.Number())
});
exports.readClientsResponseSchema = type_provider_typebox_1.Type.Array(type_provider_typebox_1.Type.Omit(exports.clientSchema, ['_id']));
exports.updateClientBankRequestSchema = type_provider_typebox_1.Type.Object({
    client_bank: type_provider_typebox_1.Type.Optional(type_provider_typebox_1.Type.Object({
        account_number: type_provider_typebox_1.Type.Optional(type_provider_typebox_1.Type.String()),
        ifsc: type_provider_typebox_1.Type.Optional(type_provider_typebox_1.Type.String())
    }))
});
//# sourceMappingURL=client.schema.js.map