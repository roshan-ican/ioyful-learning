"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const kits_requests_repo_1 = require("@/data-access/kits-requests.repo");
const updateKitsRequestsUseCase = async (kitsData, clientId, kitsId) => {
    const kitsRequest = await (0, kits_requests_repo_1.findKitsRequest)(kitsId);
    if (!kitsRequest) {
        throw new Error('Kits request not found!');
    }
    await (0, kits_requests_repo_1.updateKitsRequests)(kitsId, kitsData);
};
exports.default = updateKitsRequestsUseCase;
//# sourceMappingURL=update-kits-request.usecase.js.map