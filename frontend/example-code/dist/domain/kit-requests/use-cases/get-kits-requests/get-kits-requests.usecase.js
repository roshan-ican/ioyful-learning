"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const kits_requests_repo_1 = require("@/data-access/kits-requests.repo");
const getKitsRequestsUseCase = async () => {
    return await (0, kits_requests_repo_1.getKitsRequests)();
};
exports.default = getKitsRequestsUseCase;
//# sourceMappingURL=get-kits-requests.usecase.js.map