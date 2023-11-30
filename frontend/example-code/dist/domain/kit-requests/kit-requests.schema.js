"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateKitsRequestsDTO = exports.createKitsRequestDTO = exports.kitsRequestsSchema = void 0;
const typebox_1 = require("@sinclair/typebox");
exports.kitsRequestsSchema = typebox_1.Type.Object({
    _id: typebox_1.Type.Optional(typebox_1.Type.String()),
    request_count: typebox_1.Type.Number(),
    kit_type: typebox_1.Type.Union([typebox_1.Type.Literal('PHYSICAL'), typebox_1.Type.Literal('VIRTUAL')]),
    product: typebox_1.Type.String(),
    issuer: typebox_1.Type.String(),
    client_id: typebox_1.Type.String(),
    remark: typebox_1.Type.String(),
    status: typebox_1.Type.String(),
    business_name: typebox_1.Type.Optional(typebox_1.Type.String()),
    program_manager: typebox_1.Type.Optional(typebox_1.Type.String()),
    card_type: typebox_1.Type.Optional(typebox_1.Type.String()),
    card_variant: typebox_1.Type.Optional(typebox_1.Type.String()),
    card_design: typebox_1.Type.Optional(typebox_1.Type.String()),
});
exports.createKitsRequestDTO = typebox_1.Type.Omit(exports.kitsRequestsSchema, ['_id', 'status', 'remark']);
exports.updateKitsRequestsDTO = typebox_1.Type.Object({
    request_count: typebox_1.Type.Optional(typebox_1.Type.Number()),
    kit_type: typebox_1.Type.Optional(typebox_1.Type.Union([typebox_1.Type.Literal('PHYSICAL'), typebox_1.Type.Literal('VIRTUAL')])),
    product: typebox_1.Type.Optional(typebox_1.Type.String()),
    issuer: typebox_1.Type.Optional(typebox_1.Type.String()),
    client_id: typebox_1.Type.Optional(typebox_1.Type.String()),
    remark: typebox_1.Type.Optional(typebox_1.Type.String()),
    status: typebox_1.Type.Optional(typebox_1.Type.String()),
    business_name: typebox_1.Type.Optional(typebox_1.Type.String()),
    program_manager: typebox_1.Type.Optional(typebox_1.Type.String()),
    card_type: typebox_1.Type.Optional(typebox_1.Type.String()),
    card_variant: typebox_1.Type.Optional(typebox_1.Type.String()),
    card_design: typebox_1.Type.Optional(typebox_1.Type.String())
});
//# sourceMappingURL=kit-requests.schema.js.map