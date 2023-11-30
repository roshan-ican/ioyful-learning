"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const kits_requests_repo_1 = require("@/data-access/kits-requests.repo");
const kits_repo_1 = require("@/data-access/kits.repo");
const updateBulkKitsUseCase = async (clientId, kitsRequestId) => {
    const kitsRequest = await (0, kits_requests_repo_1.findKitsRequest)(kitsRequestId);
    if (!kitsRequest)
        throw new Error("Kits request not found");
    if (kitsRequest.status !== 'APPROVED') {
        throw new Error('Invalid kit request');
    }
    const unAssignedKits = await (0, kits_repo_1.getUnassignedKits)(kitsRequest.request_count, kitsRequest.kit_type);
    if (unAssignedKits.length < kitsRequest.request_count) {
        throw new Error("Kits not available");
    }
    for (const kits of unAssignedKits) {
        kits.assigned_client_id = kitsRequest.client_id;
    }
    await (0, kits_repo_1.updateBulkKits)(unAssignedKits);
};
exports.default = updateBulkKitsUseCase;
//# sourceMappingURL=update-bulk-kits.usecase.js.map