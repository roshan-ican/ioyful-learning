"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const clients_repo_1 = require("@/data-access/clients.repo");
const getClientById = async (clientId) => {
    const client = await (0, clients_repo_1.getClient)(clientId);
    if (!client) {
        throw new Error('Error in fetching clients');
    }
    return client;
};
exports.default = getClientById;
//# sourceMappingURL=get-client-by-id.usercase.js.map