"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.kitRequestSchema = exports.kitsSchema = void 0;
const typebox_1 = require("@sinclair/typebox");
exports.kitsSchema = typebox_1.Type.Object({
    _id: typebox_1.Type.Optional(typebox_1.Type.String()),
    kit_number: typebox_1.Type.String(),
    kit_type: typebox_1.Type.String(),
    product: typebox_1.Type.String(),
    issuer: typebox_1.Type.String(),
    assigned_client_id: typebox_1.Type.String(),
    client_id: typebox_1.Type.String(),
    remark: typebox_1.Type.String(),
    status: typebox_1.Type.String()
});
exports.kitRequestSchema = typebox_1.Type.Array(typebox_1.Type.Object({
    kit_number: typebox_1.Type.String({
        minLength: 1,
        maxLength: 15,
        pattern: '^[0-9]+$'
    }),
    kit_type: typebox_1.Type.Union([typebox_1.Type.Literal('PHYSICAL'), typebox_1.Type.Literal('VIRTUAL')])
}));
//# sourceMappingURL=kits.schema.js.map