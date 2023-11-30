"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const clients_repo_1 = require("@/data-access/clients.repo");
const getClientByEmailId = async (emailId) => {
    const client = await (0, clients_repo_1.getClientByEmail)(emailId);
    if (!client) {
        throw new Error('Error in fetching clients');
    }
    return client;
};
exports.default = getClientByEmailId;
//# sourceMappingURL=get-client-by-email.usecase.js.map