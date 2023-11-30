"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const kits_requests_repo_1 = require("@/data-access/kits-requests.repo");
const clients_repo_1 = require("@/data-access/clients.repo");
const createKitsRequestsUseCase = async (kitsData) => {
    const client = await (0, clients_repo_1.getClient)(kitsData.client_id);
    if (!client) {
        throw new Error('Client not found!');
    }
    kitsData['status'] = 'PENDING';
    await (0, kits_requests_repo_1.createKitsRequests)(kitsData);
};
exports.default = createKitsRequestsUseCase;
//# sourceMappingURL=create-kits-requests.usecase.js.map