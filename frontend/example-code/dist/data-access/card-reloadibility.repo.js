"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCardReloadibility = exports.createCardReloadibility = void 0;
const card_reloadibility_model_1 = require("@/data-access/models/card-reloadibility.model");
const createCardReloadibility = async (cardReloadibility) => {
    return card_reloadibility_model_1.CardReloadibilityModel.create(cardReloadibility);
};
exports.createCardReloadibility = createCardReloadibility;
const updateCardReloadibility = async (id, cardReloadibility) => {
    return card_reloadibility_model_1.CardReloadibilityModel.updateOne({ _id: id }, { $set: cardReloadibility });
};
exports.updateCardReloadibility = updateCardReloadibility;
//# sourceMappingURL=card-reloadibility.repo.js.map