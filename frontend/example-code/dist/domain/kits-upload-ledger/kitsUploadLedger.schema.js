"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.kitsUploadLedgerSchema = void 0;
const typebox_1 = require("@sinclair/typebox");
exports.kitsUploadLedgerSchema = typebox_1.Type.Object({
    _id: typebox_1.Type.Optional(typebox_1.Type.String()),
    storageLink: typebox_1.Type.Optional(typebox_1.Type.String()),
    createdAt: typebox_1.Type.Date(),
    modifiedBy: typebox_1.Type.Optional(typebox_1.Type.String()),
    modifiedAt: typebox_1.Type.Optional(typebox_1.Type.Date()),
    remark: typebox_1.Type.Optional(typebox_1.Type.String()),
    status: typebox_1.Type.String()
});
//# sourceMappingURL=kitsUploadLedger.schema.js.map