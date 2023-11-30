"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validateSchema_1 = require("@/common/utils/validateSchema");
const kits_schema_1 = require("../../kits.schema");
const kits_repo_1 = require("@/data-access/kits.repo");
const kits_uploads_ledger_repo_1 = require("@/data-access/kits-uploads-ledger.repo");
const constants_1 = require("@/common/constants");
const createBulkKitsUseCase = async (kitsList) => {
    (0, validateSchema_1.validateSchema)(kits_schema_1.kitRequestSchema, kitsList);
    const kitsUploadLedger = {
        storageLink: 'https://www.google.com',
        modifiedAt: Date.now(),
        remark: constants_1.PROCESS_STATUS.INITIATED.toString(),
        status: constants_1.PROCESS_STATUS.INITIATED.toString()
    };
    const createKitsUploadLedgerPromise = (0, kits_uploads_ledger_repo_1.createKitsUploadLedger)(kitsUploadLedger);
    let kitsUploadLedgerRemark;
    let bulkKitsRes;
    try {
        bulkKitsRes = await (0, kits_repo_1.createBulkKits)(kitsList);
    }
    catch (err) {
        kitsUploadLedgerRemark = err;
    }
    let kitsUploadLedgerStatus;
    if (bulkKitsRes && bulkKitsRes.insertedCount === kitsList.length) {
        kitsUploadLedgerStatus = constants_1.PROCESS_STATUS.SUCCESSFUL.toString();
        kitsUploadLedgerRemark = constants_1.PROCESS_STATUS.SUCCESSFUL.toString();
    }
    else {
        kitsUploadLedgerStatus = constants_1.PROCESS_STATUS.FAILED.toString();
    }
    const [kitsUploadLedgerRes] = await Promise.all([
        createKitsUploadLedgerPromise
    ]);
    await (0, kits_uploads_ledger_repo_1.updateKitsUploadLedger)(kitsUploadLedgerRes._id, {
        status: kitsUploadLedgerStatus,
        modifiedAt: Date.now(),
        remark: kitsUploadLedgerRemark
    });
};
exports.default = createBulkKitsUseCase;
//# sourceMappingURL=create-bulk-kits.usecase.js.map