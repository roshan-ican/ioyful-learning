"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const clients_repo_1 = require("@/data-access/clients.repo");
const getAllClient = async (queryOptions) => {
    const client = await (0, clients_repo_1.getAllClients)(queryOptions);
    if (!client) {
        throw new Error('Error in fetching clients');
    }
    return client;
};
exports.default = getAllClient;
//# sourceMappingURL=get-client-all.usecase.js.map