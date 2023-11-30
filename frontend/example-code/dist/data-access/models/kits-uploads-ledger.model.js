"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.kitsUploadLedger = void 0;
const mongoose_1 = require("mongoose");
const kitsUploadLedgerSchema = new mongoose_1.default.Schema({
    storageLink: { type: String },
    createdAt: { type: Date, default: Date.now },
    modifiedBy: { type: String },
    modifiedAt: { type: Date },
    remark: { type: String },
    status: { type: String, required: true }
});
exports.kitsUploadLedger = mongoose_1.default.model('kitsUploadLedger', kitsUploadLedgerSchema);
//# sourceMappingURL=kits-uploads-ledger.model.js.map