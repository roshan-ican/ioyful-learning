"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCardNetwork = exports.createCardNetwork = void 0;
const card_network_model_1 = require("@/data-access/models/card-network.model");
const createCardNetwork = async (cardNetwork) => {
    return card_network_model_1.CardNetworkModel.create(cardNetwork);
};
exports.createCardNetwork = createCardNetwork;
const updateCardNetwork = async (id, cardNetwork) => {
    return card_network_model_1.CardNetworkModel.updateOne({ _id: id }, { $set: cardNetwork });
};
exports.updateCardNetwork = updateCardNetwork;
//# sourceMappingURL=card-network.repo.js.map