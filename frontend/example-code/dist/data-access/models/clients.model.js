"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = exports.ClientDepositBankAccount = exports.ClientBankAccount = exports.ClientsWallets = exports.CardReloadabilityType = exports.ClientType = exports.CardNetwork = void 0;
const mongoose_1 = require("mongoose");
const common_fields_model_1 = require("./common-fields.model");
const paginate_1 = require("../common/paginate");
const CardNetworkSchema = new mongoose_1.default.Schema({
    name: String
});
const ClientTypeSchema = new mongoose_1.default.Schema({
    name: String
});
const CardReloadabilityTypeSchema = new mongoose_1.default.Schema({
    name: String,
    interchange_rate: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'CardReloadabilityType'
    }
});
const ClientBankAccountSchema = new mongoose_1.default.Schema({
    account_number: {
        type: String,
        required: true
    },
    ifsc: {
        type: String,
        required: true
    },
    clientHashId: String,
    name: {
        type: String,
        required: true
    },
    ...common_fields_model_1.default
});
const ClientDepositBankAccountSchema = new mongoose_1.default.Schema({
    account_number: {
        type: String,
        required: true
    },
    ifsc: {
        type: String,
        required: true
    },
    clientHashId: String,
    name: {
        type: String,
        required: true
    },
    ...common_fields_model_1.default
});
const ClientsWalletsSchema = new mongoose_1.default.Schema({
    total_debits: {
        type: String
    },
    total_credits: {
        type: String
    },
    clientHashId: {
        type: String
    },
    ...common_fields_model_1.default
});
const ClientSchema = new mongoose_1.default.Schema({
    buissness_name: String,
    product_type: [
        {
            type: String
        }
    ],
    mobile_number: String,
    email: {
        type: String,
        unique: true
    },
    stage: String,
    isActive: {
        type: Boolean,
        default: true
    },
    card_network: String,
    issuer: [
        {
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: 'issuers'
        }
    ],
    client_type: [
        {
            type: String
        }
    ],
    client_bank: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'ClientBankAccount'
    },
    client_deposit_bank: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'ClientDepositBankAccount'
    },
    client_wallet: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'ClientsWallets'
    },
    name: {
        type: String,
        required: true
    },
    nkPoc: {
        type: String,
        required: true
    },
    clientHashId: {
        type: String
    },
    ...common_fields_model_1.default
});
exports.CardNetwork = mongoose_1.default.model('CardNetwork', CardNetworkSchema);
exports.ClientType = mongoose_1.default.model('ClientType', ClientTypeSchema);
exports.CardReloadabilityType = mongoose_1.default.model('CardReloadabilityType', CardReloadabilityTypeSchema);
exports.ClientsWallets = mongoose_1.default.model('ClientsWallets', ClientsWalletsSchema);
exports.ClientBankAccount = mongoose_1.default.model('ClientBankAccount', ClientBankAccountSchema);
exports.ClientDepositBankAccount = mongoose_1.default.model('ClientDepositBankAccount', ClientDepositBankAccountSchema);
ClientSchema.plugin((paginate_1.default));
exports.Client = mongoose_1.default.model('Client', ClientSchema);
//# sourceMappingURL=clients.model.js.map