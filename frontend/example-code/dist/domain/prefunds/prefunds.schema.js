"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readPrefundsResponseSchema = exports.readPrefundsRequestSchema = exports.deletePrefundResponseSchema = exports.deletePrefundRequestSchema = exports.updatePrefundResponseSchema = exports.updatePrefundRequestSchema = exports.readPrefundResponseSchema = exports.readPrefundRequestSchema = exports.createPrefundResponseSchema = exports.createPrefundRequestSchema = exports.prefundsSchema = exports.TransactionType = exports.TransactionStatus = exports.PrefundType = void 0;
const type_provider_typebox_1 = require("@fastify/type-provider-typebox");
const client_schema_1 = require("../client/client.schema");
var PrefundType;
(function (PrefundType) {
    PrefundType["A"] = "A";
    PrefundType["B"] = "B";
})(PrefundType || (exports.PrefundType = PrefundType = {}));
var TransactionStatus;
(function (TransactionStatus) {
    TransactionStatus["PENDING"] = "PENDING";
    TransactionStatus["APPROVE"] = "APPROVE";
    TransactionStatus["REJECT"] = "REJECT";
})(TransactionStatus || (exports.TransactionStatus = TransactionStatus = {}));
var TransactionType;
(function (TransactionType) {
    TransactionType["A"] = "A";
    TransactionType["B"] = "B";
})(TransactionType || (exports.TransactionType = TransactionType = {}));
exports.prefundsSchema = type_provider_typebox_1.Type.Object({
    _id: type_provider_typebox_1.Type.String(),
    transaction_id: type_provider_typebox_1.Type.Optional(type_provider_typebox_1.Type.String()),
    transaction_type: type_provider_typebox_1.Type.Enum(TransactionType),
    status: type_provider_typebox_1.Type.Optional(type_provider_typebox_1.Type.Enum(TransactionStatus)),
    prefund_type: type_provider_typebox_1.Type.Enum(PrefundType),
    amount: type_provider_typebox_1.Type.String({ pattern: '^\\d+(\\.\\d+)?$' }),
    remark: type_provider_typebox_1.Type.String(),
    client_id: type_provider_typebox_1.Type.Partial(client_schema_1.clientSchema),
    bank_account_id: type_provider_typebox_1.Type.String(),
    created_at: type_provider_typebox_1.Type.Optional(type_provider_typebox_1.Type.String()),
    updated_at: type_provider_typebox_1.Type.Optional(type_provider_typebox_1.Type.String()),
    created_by: type_provider_typebox_1.Type.Optional(type_provider_typebox_1.Type.String()),
    updated_by: type_provider_typebox_1.Type.Optional(type_provider_typebox_1.Type.String())
});
exports.createPrefundRequestSchema = type_provider_typebox_1.Type.Omit(exports.prefundsSchema, [
    '_id',
    'created_at',
    'updated_at'
]);
exports.createPrefundResponseSchema = exports.prefundsSchema;
exports.readPrefundRequestSchema = type_provider_typebox_1.Type.Object({
    _id: type_provider_typebox_1.Type.String()
});
exports.readPrefundResponseSchema = exports.prefundsSchema;
exports.updatePrefundRequestSchema = type_provider_typebox_1.Type.Partial(type_provider_typebox_1.Type.Omit(exports.prefundsSchema, [
    '_id',
    'bank_account_id',
    'client_id',
    'prefund_type',
    'transaction_type',
    'transaction_id',
    'transaction_type',
    'created_at',
    'created_by'
]));
exports.updatePrefundResponseSchema = exports.prefundsSchema;
exports.deletePrefundRequestSchema = type_provider_typebox_1.Type.Object({
    _id: type_provider_typebox_1.Type.String()
});
exports.deletePrefundResponseSchema = type_provider_typebox_1.Type.Object({
    message: type_provider_typebox_1.Type.String()
});
exports.readPrefundsRequestSchema = type_provider_typebox_1.Type.Object({
    limit: type_provider_typebox_1.Type.Optional(type_provider_typebox_1.Type.Number()),
    offset: type_provider_typebox_1.Type.Optional(type_provider_typebox_1.Type.Number())
});
exports.readPrefundsResponseSchema = type_provider_typebox_1.Type.Array(exports.prefundsSchema);
//# sourceMappingURL=prefunds.schema.js.map