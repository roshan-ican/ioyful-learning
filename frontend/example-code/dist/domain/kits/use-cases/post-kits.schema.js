"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postKitsSchema = void 0;
const typebox_1 = require("@sinclair/typebox");
exports.postKitsSchema = {
    summary: 'New kits request',
    tags: ['Kits'],
    security: [{}],
    consumes: ['multipart/form-data'],
    produces: ['application/json'],
    querystring: typebox_1.Type.Object({
        action: typebox_1.Type.Union([typebox_1.Type.Literal('bulkassign'), typebox_1.Type.Literal('bulkupload')])
    }),
    body: typebox_1.Type.Object({
        file: typebox_1.Type.Optional(typebox_1.Type.Any())
    })
};
//# sourceMappingURL=post-kits.schema.js.map