"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const clients_repo_1 = require("@/data-access/clients.repo");
const prefund_repo_1 = require("@/data-access/prefund.repo");
const prefunds_schema_1 = require("@/domain/prefunds/prefunds.schema");
const crypto_1 = require("crypto");
const createNewPrefund = async (newPrefund) => {
    if (!newPrefund.client_id._id) {
        throw new Error('Client id required');
    }
    const findClient = await (0, clients_repo_1.getClient)(newPrefund.client_id._id);
    if (!findClient) {
        throw new Error('Client not found');
    }
    newPrefund.transaction_id = (0, crypto_1.randomUUID)();
    newPrefund.status = prefunds_schema_1.TransactionStatus.PENDING;
    const addNewPrefund = await (0, prefund_repo_1.createPrefund)(newPrefund);
    if (!addNewPrefund) {
        throw new Error('Error creating Prefund');
    }
    return addNewPrefund;
};
exports.default = createNewPrefund;
//# sourceMappingURL=post-prefunds.usercase.js.map