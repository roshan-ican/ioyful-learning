"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createKitsRequestFastifySchema = void 0;
const kit_requests_schema_1 = require("@/domain/kit-requests/kit-requests.schema");
exports.createKitsRequestFastifySchema = {
    summary: 'New kits request',
    tags: ['Kits'],
    security: [{}],
    body: kit_requests_schema_1.createKitsRequestDTO
};
//# sourceMappingURL=create-kits-requests.schema.js.map