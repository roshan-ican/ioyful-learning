"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateClientBankDetails = void 0;
const clients_repo_1 = require("@/data-access/clients.repo");
const updateClientBankDetails = async (clientId, bankDetails) => {
    const existingClient = await (0, clients_repo_1.getClient)(clientId);
    if (!existingClient) {
        throw new Error('Client not found');
    }
    try {
        const updatedClient = await (0, clients_repo_1.updateBankbyId)(clientId, bankDetails);
        if (!updatedClient) {
            throw new Error('Client not found');
        }
        return updatedClient;
    }
    catch (error) {
        throw new Error('Error updating client bank details');
    }
};
exports.updateClientBankDetails = updateClientBankDetails;
//# sourceMappingURL=put-client-bankdetails.usecase.js.map