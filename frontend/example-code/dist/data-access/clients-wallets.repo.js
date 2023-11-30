"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateWallet = exports.getClientsWallets = exports.getAllClientWallets = exports.createClientsWallets = void 0;
const clients_model_1 = require("@/data-access/models/clients.model");
const getAllClientWallets = async () => {
    return await clients_model_1.ClientsWallets.find();
};
exports.getAllClientWallets = getAllClientWallets;
const getClientsWallets = async (id) => {
    const client = await clients_model_1.ClientsWallets.findById(id);
    return client;
};
exports.getClientsWallets = getClientsWallets;
const updateWallet = async (id, updateWallet) => {
    return await clients_model_1.ClientsWallets.updateOne({ _id: id }, { $set: updateWallet });
};
exports.updateWallet = updateWallet;
const createClientsWallets = async (newClientsWallets) => {
    return await clients_model_1.ClientsWallets.create(newClientsWallets);
};
exports.createClientsWallets = createClientsWallets;
//# sourceMappingURL=clients-wallets.repo.js.map