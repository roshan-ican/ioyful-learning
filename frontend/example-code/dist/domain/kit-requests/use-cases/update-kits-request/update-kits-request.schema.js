"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateKitsRequestFastifySchema = void 0;
const kit_requests_schema_1 = require("@/domain/kit-requests/kit-requests.schema");
const typebox_1 = require("@sinclair/typebox");
exports.updateKitsRequestFastifySchema = {
    summary: 'New kits request',
    tags: ['Kits'],
    security: [{}],
    headers: typebox_1.Type.Object({
        'client-id': typebox_1.Type.Optional(typebox_1.Type.String()),
        'kits-id': typebox_1.Type.String()
    }),
    body: kit_requests_schema_1.updateKitsRequestsDTO
};
//# sourceMappingURL=update-kits-request.schema.js.map