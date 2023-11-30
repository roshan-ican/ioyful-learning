"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIssuerByName = exports.getIssuer = exports.updateIssuers = exports.getAllIssuers = exports.createIssuers = void 0;
const issuers_model_1 = require("@/data-access/models/issuers.model");
const createIssuers = (issuers) => {
    return issuers_model_1.issuersModel.create(issuers);
};
exports.createIssuers = createIssuers;
const updateIssuers = async (id, issuers) => {
    return issuers_model_1.issuersModel.updateOne({ _id: id }, { $set: issuers });
};
exports.updateIssuers = updateIssuers;
const getAllIssuers = () => {
    return issuers_model_1.issuersModel
        .find()
        .populate(['card_networks', 'card_reloadibility_type']);
};
exports.getAllIssuers = getAllIssuers;
const getIssuer = async (id) => {
    const issuer = await issuers_model_1.issuersModel.findById(id);
    return issuer;
};
exports.getIssuer = getIssuer;
const getIssuerByName = async (name) => {
    const issuer = await issuers_model_1.issuersModel.findOne({ name: name });
    return issuer;
};
exports.getIssuerByName = getIssuerByName;
//# sourceMappingURL=issuers.repo.js.map