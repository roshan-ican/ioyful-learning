"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getClientsByIssuers = exports.getClientByIssuer = exports.getClientByEmail = exports.updateBankbyId = exports.updateClient = exports.createClient = exports.getClient = exports.getAllClients = void 0;
const clients_model_1 = require("@/data-access/models/clients.model");
const R = require("ramda");
const getAllClients = async (queryOptions) => {
    const filter = R.pick(['name', 'role'], queryOptions);
    const options = R.pick(['sortBy', 'limit', 'page', 'projectBy'], queryOptions);
    return await clients_model_1.Client.paginate(filter, {
        ...options,
        populate: 'client_deposit_bank,client_bank,client_wallet,issuer'
    });
};
exports.getAllClients = getAllClients;
const getClientByIssuer = async (queryOptions, issuer) => {
    const filter = R.pick(['name', 'role', issuer], queryOptions);
    const options = R.pick(['sortBy', 'limit', 'page', 'projectBy'], queryOptions);
    if (issuer) {
        filter['issuer'] = issuer;
    }
    return await clients_model_1.Client.paginate(filter, {
        ...options,
        populate: 'client_bank'
    });
};
exports.getClientByIssuer = getClientByIssuer;
const getClient = async (id) => {
    const client = await clients_model_1.Client.findById(id)
        .populate(['client_deposit_bank', 'client_bank', 'client_wallet'])
        .exec();
    return client;
};
exports.getClient = getClient;
const getClientsByIssuers = async (issuer) => {
    const client = await clients_model_1.Client.find({ issuer: issuer })
        .populate(['client_deposit_bank', 'client_bank', 'client_wallet'])
        .exec();
    return client;
};
exports.getClientsByIssuers = getClientsByIssuers;
const getClientByEmail = async (email) => {
    const client = await clients_model_1.Client.findOne({ email: email })
        .populate(['client_bank', 'client_deposit_bank', 'client_wallet'])
        .exec();
    return client;
};
exports.getClientByEmail = getClientByEmail;
const createClient = async (newClient) => {
    return await clients_model_1.Client.create(newClient);
};
exports.createClient = createClient;
const updateClient = async (id, updateClient) => {
    return await clients_model_1.Client.updateOne({ _id: id }, { $set: updateClient });
};
exports.updateClient = updateClient;
const updateBankbyId = async (id, updatedBankDetails) => {
    return await clients_model_1.Client.findByIdAndUpdate(id, {
        $set: updatedBankDetails
    }, {
        new: true
    });
};
exports.updateBankbyId = updateBankbyId;
//# sourceMappingURL=clients.repo.js.map