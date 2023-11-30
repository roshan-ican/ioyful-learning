"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBank = exports.getBankByAccountNumber = exports.getClientBankAccount = exports.getAllClientsBankAccount = exports.createClientBankAccount = void 0;
const clients_model_1 = require("@/data-access/models/clients.model");
const getAllClientsBankAccount = async () => {
    return await clients_model_1.ClientBankAccount.find();
};
exports.getAllClientsBankAccount = getAllClientsBankAccount;
const getClientBankAccount = async (id) => {
    const client = await clients_model_1.ClientBankAccount.findById(id);
    return client;
};
exports.getClientBankAccount = getClientBankAccount;
const getBankByAccountNumber = async (accountNumber) => {
    const clientBankAccount = await clients_model_1.ClientBankAccount.findOne({
        account_number: accountNumber
    });
    return clientBankAccount;
};
exports.getBankByAccountNumber = getBankByAccountNumber;
const updateBank = async (id, updateBank) => {
    return await clients_model_1.ClientBankAccount.updateOne({ _id: id }, { $set: updateBank });
};
exports.updateBank = updateBank;
const createClientBankAccount = async (newClientBankAccount) => {
    return await clients_model_1.ClientBankAccount.create(newClientBankAccount);
};
exports.createClientBankAccount = createClientBankAccount;
//# sourceMappingURL=clients-bank-account.repo.js.map