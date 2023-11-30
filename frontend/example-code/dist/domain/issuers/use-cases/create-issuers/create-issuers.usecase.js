"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const issuers_repo_1 = require("@/data-access/issuers.repo");
const card_network_repo_1 = require("@/data-access/card-network.repo");
const card_reloadibility_repo_1 = require("@/data-access/card-reloadibility.repo");
const createIssuersUseCase = async (addIssuers) => {
    var _a, _b, _c, _d;
    if ((!((_a = addIssuers === null || addIssuers === void 0 ? void 0 : addIssuers.card_reloadibility_type) === null || _a === void 0 ? void 0 : _a.fixed) && !((_b = addIssuers === null || addIssuers === void 0 ? void 0 : addIssuers.card_reloadibility_type) === null || _b === void 0 ? void 0 : _b.slab)) || (((_c = addIssuers === null || addIssuers === void 0 ? void 0 : addIssuers.card_reloadibility_type) === null || _c === void 0 ? void 0 : _c.fixed) && ((_d = addIssuers === null || addIssuers === void 0 ? void 0 : addIssuers.card_reloadibility_type) === null || _d === void 0 ? void 0 : _d.slab))) {
        throw new Error('Either slab or fixed must be present, but not both.');
    }
    const card_reloadibility_type = addIssuers.card_reloadibility_type;
    const card_networks = addIssuers.card_networks;
    const CardReloadibilityTypePromise = (0, card_reloadibility_repo_1.createCardReloadibility)(card_reloadibility_type);
    const CardNetworksPromise = (0, card_network_repo_1.createCardNetwork)(card_networks);
    const [savedCardReloadibilityType, savedCardNetworks] = await Promise.all([CardReloadibilityTypePromise, CardNetworksPromise]);
    addIssuers.card_networks = savedCardNetworks;
    addIssuers.card_reloadibility_type = savedCardReloadibilityType;
    const savedIssuer = await (0, issuers_repo_1.createIssuers)(addIssuers);
    return savedIssuer;
};
exports.default = createIssuersUseCase;
//# sourceMappingURL=create-issuers.usecase.js.map