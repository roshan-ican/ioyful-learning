"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateDepositeBank = exports.getDepositeBankAccountByAccountNumber = exports.getClientDepositesBankAccount = exports.getAllClientsDepositesBankAccount = exports.createClientDepositesBankAccount = void 0;
const clients_model_1 = require("./models/clients.model");
const getAllClientsDepositesBankAccount = async () => {
    return await clients_model_1.ClientDepositBankAccount.find();
};
exports.getAllClientsDepositesBankAccount = getAllClientsDepositesBankAccount;
const getClientDepositesBankAccount = async (id) => {
    const client = await clients_model_1.ClientDepositBankAccount.findById(id);
    return client;
};
exports.getClientDepositesBankAccount = getClientDepositesBankAccount;
const getDepositeBankAccountByAccountNumber = async (accountNumber) => {
    const depositeBankAccount = await clients_model_1.ClientDepositBankAccount.findOne({
        account_number: accountNumber
    });
    return depositeBankAccount;
};
exports.getDepositeBankAccountByAccountNumber = getDepositeBankAccountByAccountNumber;
const updateDepositeBank = async (id, updateProduct) => {
    return await clients_model_1.ClientDepositBankAccount.updateOne({ _id: id }, { $set: updateProduct });
};
exports.updateDepositeBank = updateDepositeBank;
const createClientDepositesBankAccount = async (newClientDepositeBankAccount) => {
    return await clients_model_1.ClientDepositBankAccount.create(newClientDepositeBankAccount);
};
exports.createClientDepositesBankAccount = createClientDepositesBankAccount;
//# sourceMappingURL=clients-deposite-bank-account.repo.js.map