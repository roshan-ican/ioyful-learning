"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createNewClient = void 0;
const clients_repo_1 = require("@/data-access/clients.repo");
const clients_bank_account_repo_1 = require("@/data-access/clients-bank-account.repo");
const clients_deposite_bank_account_repo_1 = require("@/data-access/clients-deposite-bank-account.repo");
const crypto_1 = require("crypto");
const clients_wallets_repo_1 = require("@/data-access/clients-wallets.repo");
const issuers_repo_1 = require("@/data-access/issuers.repo");
const createNewClient = async (newClient) => {
    var _a, _b, _c, _d, _e, _f;
    const existingClient = await (0, clients_repo_1.getClientByEmail)(newClient.email);
    if (existingClient) {
        throw new Error('Client already exists with the provided email');
    }
    const validationCheck = await checkForValidation(newClient);
    if (!validationCheck)
        throw new Error('ALL FIELDS REQUIRED');
    if (newClient.issuer) {
        newClient.issuer.forEach(async (i) => {
            const issuer = await (0, issuers_repo_1.getIssuer)(i._id);
            if (!issuer) {
                throw new Error('Error while fetching issuer');
            }
            i._id = issuer._id;
            i.card_networks = issuer.card_networks;
            i.card_reloadibility_type = issuer.card_reloadibility_type;
            i.logo_url = issuer.logo_url;
            i.name = issuer.name;
            i.program_type = issuer.program_type;
            i.status = issuer.status;
        });
        const clientHashId = (0, crypto_1.randomUUID)();
        newClient.clientHashId = clientHashId;
        const newClientWallet = {
            clientHashId: clientHashId,
            total_credits: '0.00',
            total_debits: '0.00'
        };
        newClient.client_wallet = newClientWallet;
        if (((_a = newClient.client_bank) === null || _a === void 0 ? void 0 : _a.ifsc) && ((_b = newClient.client_deposit_bank) === null || _b === void 0 ? void 0 : _b.ifsc)) {
            const newAccount = {
                account_number: (_c = newClient.client_bank) === null || _c === void 0 ? void 0 : _c.account_number,
                ifsc: (_d = newClient.client_bank) === null || _d === void 0 ? void 0 : _d.ifsc,
                name: newClient.client_bank.name,
                clientHashId: clientHashId
            };
            const clientBankAcc = await createBankAccount(newAccount);
            if (clientBankAcc) {
                const bankId = clientBankAcc._id;
                const newDepositeBankAccount = {
                    account_number: (_e = newClient.client_deposit_bank) === null || _e === void 0 ? void 0 : _e.account_number,
                    ifsc: (_f = newClient.client_deposit_bank) === null || _f === void 0 ? void 0 : _f.ifsc,
                    name: newClient.client_deposit_bank.name,
                    clientHashId: clientHashId
                };
                const depositeBankAcc = await createDepositeBankAccount(newDepositeBankAccount);
                const clientWallet = await createClientWallet(newClientWallet);
                newClient.client_bank._id = bankId;
                newClient.client_deposit_bank._id = depositeBankAcc === null || depositeBankAcc === void 0 ? void 0 : depositeBankAcc._id;
                newClient.client_wallet._id = clientWallet === null || clientWallet === void 0 ? void 0 : clientWallet._id;
                const createdClient = await (0, clients_repo_1.createClient)(newClient);
                if (!createdClient)
                    throw new Error('Client creation not done');
                return createdClient;
            }
        }
    }
    throw new Error('Error while creating client');
};
exports.createNewClient = createNewClient;
const createBankAccount = async (newAccount) => {
    if (newAccount.account_number) {
        const newAccountCreate = await (0, clients_bank_account_repo_1.createClientBankAccount)(newAccount);
        if (!newAccountCreate) {
            throw new Error('account creation error');
        }
        return newAccountCreate;
    }
};
const createDepositeBankAccount = async (newDepositeAccount) => {
    if (newDepositeAccount.account_number) {
        const newDepositeAccountCreate = await (0, clients_deposite_bank_account_repo_1.createClientDepositesBankAccount)(newDepositeAccount);
        if (!newDepositeAccountCreate) {
            throw new Error('depoite account creation error');
        }
        return newDepositeAccountCreate;
    }
};
const checkForValidation = async (newClient) => {
    var _a, _b, _c, _d;
    if (((_a = newClient.client_bank) === null || _a === void 0 ? void 0 : _a.account_number) &&
        ((_b = newClient.client_bank) === null || _b === void 0 ? void 0 : _b.ifsc) &&
        ((_c = newClient.client_deposit_bank) === null || _c === void 0 ? void 0 : _c.account_number) &&
        ((_d = newClient.client_deposit_bank) === null || _d === void 0 ? void 0 : _d.ifsc)) {
        return true;
    }
    else {
        return false;
    }
};
const createClientWallet = async (newWallet) => {
    const newWalletCreate = await (0, clients_wallets_repo_1.createClientsWallets)(newWallet);
    if (!newWalletCreate) {
        throw new Error('wallet creation error');
    }
    return newWalletCreate;
};
//# sourceMappingURL=post-client.usecase.js.map