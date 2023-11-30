"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateKitsUploadLedger = exports.createKitsUploadLedger = void 0;
const kits_uploads_ledger_model_1 = require("@/data-access/models/kits-uploads-ledger.model");
const createKitsUploadLedger = async (data) => {
    return await kits_uploads_ledger_model_1.kitsUploadLedger.create(data);
};
exports.createKitsUploadLedger = createKitsUploadLedger;
const updateKitsUploadLedger = async (id, data) => {
    return await kits_uploads_ledger_model_1.kitsUploadLedger.updateOne({ _id: id }, { $set: data });
};
exports.updateKitsUploadLedger = updateKitsUploadLedger;
//# sourceMappingURL=kits-uploads-ledger.repo.js.map