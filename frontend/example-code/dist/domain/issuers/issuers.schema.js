"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCardReloadibilitySchemaResponseSchema = exports.updateCardReloadibilitySchema = exports.updateCardNetworksRequestSchema = exports.createCardNetworkSchemaResponseSchema = exports.createSlabSchemaResponseSchema = exports.createFixedSchemaResponseSchema = exports.readIssuersResponseSchema = exports.createIssuersResponseSchema = exports.updateIssuersRequestSchema = exports.updateProductRequestSchema = exports.issuersSchema = exports.CardReloadibilitySchema = exports.cardNetworkSchema = exports.slabSchema = exports.fixedSchema = void 0;
const typebox_1 = require("@sinclair/typebox");
exports.fixedSchema = typebox_1.Type.Object({
    _id: typebox_1.Type.Optional(typebox_1.Type.String()),
    bank_share: typebox_1.Type.Optional(typebox_1.Type.Number())
});
exports.slabSchema = typebox_1.Type.Object({
    _id: typebox_1.Type.Optional(typebox_1.Type.String()),
    min_amount: typebox_1.Type.Optional(typebox_1.Type.Number()),
    max_amount: typebox_1.Type.Optional(typebox_1.Type.Number()),
    bank_share: typebox_1.Type.Optional(typebox_1.Type.Number())
});
exports.cardNetworkSchema = typebox_1.Type.Object({
    _id: typebox_1.Type.Optional(typebox_1.Type.String()),
    name: typebox_1.Type.String(),
    card_Type: typebox_1.Type.Array(typebox_1.Type.String())
});
exports.CardReloadibilitySchema = typebox_1.Type.Object({
    _id: typebox_1.Type.Optional(typebox_1.Type.String()),
    name: typebox_1.Type.String(),
    slab: typebox_1.Type.Optional(typebox_1.Type.Array(exports.slabSchema)),
    fixed: typebox_1.Type.Optional(exports.fixedSchema)
});
exports.issuersSchema = typebox_1.Type.Object({
    _id: typebox_1.Type.Optional(typebox_1.Type.String()),
    name: typebox_1.Type.String(),
    program_type: typebox_1.Type.String(),
    logo_url: typebox_1.Type.String(),
    card_networks: exports.cardNetworkSchema,
    status: typebox_1.Type.Boolean(),
    card_reloadibility_type: exports.CardReloadibilitySchema,
    issuers_logo_path: typebox_1.Type.String(),
});
exports.updateProductRequestSchema = typebox_1.Type.Partial(typebox_1.Type.Omit(exports.issuersSchema, ['_id']));
exports.updateIssuersRequestSchema = typebox_1.Type.Partial(exports.issuersSchema);
exports.createIssuersResponseSchema = exports.issuersSchema;
exports.readIssuersResponseSchema = typebox_1.Type.Array(exports.issuersSchema);
exports.createFixedSchemaResponseSchema = exports.fixedSchema;
exports.createSlabSchemaResponseSchema = exports.slabSchema;
exports.createCardNetworkSchemaResponseSchema = exports.cardNetworkSchema;
exports.updateCardNetworksRequestSchema = typebox_1.Type.Partial(exports.cardNetworkSchema);
exports.updateCardReloadibilitySchema = typebox_1.Type.Partial(exports.CardReloadibilitySchema);
exports.createCardReloadibilitySchemaResponseSchema = exports.CardReloadibilitySchema;
//# sourceMappingURL=issuers.schema.js.map