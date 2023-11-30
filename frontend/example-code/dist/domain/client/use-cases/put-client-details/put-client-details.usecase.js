"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateClientDetails = void 0;
const clients_repo_1 = require("@/data-access/clients.repo");
const clients_deposite_bank_account_repo_1 = require("@/data-access/clients-deposite-bank-account.repo");
const clients_bank_account_repo_1 = require("@/data-access/clients-bank-account.repo");
const updateClientDetails = async (clientId, updateData) => {
    var _a, _b, _c, _d;
    const existingClient = await (0, clients_repo_1.getClient)(clientId);
    if (updateData.client_deposit_bank) {
        updateData.client_deposit_bank._id =
            (_a = existingClient === null || existingClient === void 0 ? void 0 : existingClient.client_deposit_bank) === null || _a === void 0 ? void 0 : _a._id;
        (0, clients_deposite_bank_account_repo_1.updateDepositeBank)((_b = existingClient === null || existingClient === void 0 ? void 0 : existingClient.client_deposit_bank) === null || _b === void 0 ? void 0 : _b._id, updateData.client_deposit_bank);
    }
    if (updateData.client_bank) {
        updateData.client_bank._id = (_c = existingClient === null || existingClient === void 0 ? void 0 : existingClient.client_bank) === null || _c === void 0 ? void 0 : _c._id;
        (0, clients_bank_account_repo_1.updateBank)((_d = existingClient === null || existingClient === void 0 ? void 0 : existingClient.client_bank) === null || _d === void 0 ? void 0 : _d._id, updateData.client_bank);
    }
    if (!existingClient) {
        throw new Error('Client not found');
    }
    const updateClientResponseSchema = await (0, clients_repo_1.updateClient)(clientId, updateData);
    existingClient.$set(updateData);
    if (!updateClientResponseSchema) {
        throw new Error('Error updating client details');
    }
    return existingClient;
};
exports.updateClientDetails = updateClientDetails;
//# sourceMappingURL=put-client-details.usecase.js.map