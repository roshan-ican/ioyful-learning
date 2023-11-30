"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const clients_repo_1 = require("@/data-access/clients.repo");
const clients_wallets_repo_1 = require("@/data-access/clients-wallets.repo");
const prefund_repo_1 = require("@/data-access/prefund.repo");
const prefunds_schema_1 = require("@/domain/prefunds/prefunds.schema");
const updateExistingPrefund = async (transaction_id, updateData) => {
    var _a;
    const fetchPrefund = await (0, prefund_repo_1.getPrefundByTxnNumber)(transaction_id);
    if (!fetchPrefund) {
        throw new Error('Error fetching prefund');
    }
    if ((fetchPrefund === null || fetchPrefund === void 0 ? void 0 : fetchPrefund.status) !== prefunds_schema_1.TransactionStatus.PENDING) {
        throw new Error('INVALID REQUEST');
    }
    if (parseFloat(((fetchPrefund === null || fetchPrefund === void 0 ? void 0 : fetchPrefund.amount) && fetchPrefund.amount) || '') !==
        parseFloat((updateData.amount && updateData.amount) || '')) {
        throw new Error('INVALID PREFUND REQUEST');
    }
    updateData.updated_at = Date.now().toString();
    const updatedPrefund = await (0, prefund_repo_1.updatePrefund)(fetchPrefund._id, updateData);
    if (!updatedPrefund) {
        throw new Error('Error updating prefund');
    }
    if (updateData.status === prefunds_schema_1.TransactionStatus.APPROVE) {
        const client = await (0, clients_repo_1.getClient)(fetchPrefund.client_id._id);
        if (!client) {
            throw new Error('client not found');
        }
        const clientWalletsId = (_a = client === null || client === void 0 ? void 0 : client.client_wallet) === null || _a === void 0 ? void 0 : _a._id;
        const fetchClientWallet = await (0, clients_wallets_repo_1.getClientsWallets)(clientWalletsId);
        if (!fetchClientWallet) {
            throw new Error('client not found');
        }
        const debits = (fetchClientWallet.total_debits && fetchClientWallet.total_debits) || '';
        const credits = (fetchClientWallet.total_credits && fetchClientWallet.total_credits) || '';
        const prefundAmount = (updateData.amount && updateData.amount) || '';
        const balance = parseFloat(credits) - parseFloat(debits);
        console.log('=============BALANCE==============');
        console.log(balance);
        const updatedCredits = parseFloat(credits) + parseFloat(prefundAmount);
        const updateWalletRequest = {
            total_credits: updatedCredits.toString()
        };
        const updateWalletCredits = await (0, clients_wallets_repo_1.updateWallet)(clientWalletsId, updateWalletRequest);
        if (!updateWalletCredits) {
            throw new Error('wallet update error');
        }
    }
    fetchPrefund.$set(updateData);
    return fetchPrefund;
};
exports.default = updateExistingPrefund;
//# sourceMappingURL=put-prefunds.usercase.js.map