"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPrefundsByIssuer = exports.updatePrefund = exports.getAllPrefunds = exports.createPrefund = exports.getPrefund = exports.getPrefundByTxnNumber = void 0;
const prefund_model_1 = require("@/data-access/models/prefund.model");
const R = require("ramda");
const getAllPrefunds = async (queryOptions) => {
    const filter = R.pick(['name', 'role'], queryOptions);
    const options = R.pick(['sortBy', 'limit', 'page', 'projectBy'], queryOptions);
    return await prefund_model_1.prefundModel.paginate(filter, {
        ...options,
        populate: 'client_id,client_id.client_bank'
    });
};
exports.getAllPrefunds = getAllPrefunds;
const getPrefund = async (id) => {
    const prefund = await prefund_model_1.prefundModel.findById(id);
    return prefund;
};
exports.getPrefund = getPrefund;
const getPrefundByTxnNumber = async (transaction_id) => {
    const prefund = await prefund_model_1.prefundModel.findOne({ transaction_id: transaction_id });
    return prefund;
};
exports.getPrefundByTxnNumber = getPrefundByTxnNumber;
const createPrefund = async (newPrefund) => {
    return await prefund_model_1.prefundModel.create(newPrefund);
};
exports.createPrefund = createPrefund;
const updatePrefund = async (id, updatePrefund) => {
    return await prefund_model_1.prefundModel.updateOne({ _id: id }, { $set: updatePrefund });
};
exports.updatePrefund = updatePrefund;
const getPrefundsByIssuer = async (queryOptions, issuer) => {
    const filter = R.pick(['name', 'role', issuer], queryOptions);
    const options = R.pick(['sortBy', 'limit', 'page', 'projectBy'], queryOptions);
    if (issuer) {
        filter['client_id'] = issuer;
    }
    return await prefund_model_1.prefundModel.paginate(filter, {
        ...options,
        populate: 'client_id.issuer,client_id,client_id.client_bank'
    });
};
exports.getPrefundsByIssuer = getPrefundsByIssuer;
//# sourceMappingURL=prefund.repo.js.map