"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const issuers_repo_1 = require("@/data-access/issuers.repo");
const card_network_repo_1 = require("@/data-access/card-network.repo");
const card_reloadibility_repo_1 = require("@/data-access/card-reloadibility.repo");
const updateUsersUseCase = async (issuer) => {
    var _a, _b, _c, _d;
    if (((_a = issuer === null || issuer === void 0 ? void 0 : issuer.card_reloadibility_type) === null || _a === void 0 ? void 0 : _a.fixed) && ((_b = issuer === null || issuer === void 0 ? void 0 : issuer.card_reloadibility_type) === null || _b === void 0 ? void 0 : _b.slab)) {
        throw new Error('Cannot have both fixed and slab rates');
    }
    let updateCardNetworkPromise;
    if (issuer === null || issuer === void 0 ? void 0 : issuer.card_networks) {
        updateCardNetworkPromise = (0, card_network_repo_1.updateCardNetwork)((_c = issuer === null || issuer === void 0 ? void 0 : issuer.card_networks) === null || _c === void 0 ? void 0 : _c._id, issuer.card_networks);
    }
    let updateCardReloadibilityPromise;
    if (issuer === null || issuer === void 0 ? void 0 : issuer.card_reloadibility_type) {
        updateCardReloadibilityPromise = (0, card_reloadibility_repo_1.updateCardReloadibility)((_d = issuer === null || issuer === void 0 ? void 0 : issuer.card_reloadibility_type) === null || _d === void 0 ? void 0 : _d._id, issuer.card_reloadibility_type);
    }
    const updatedIssuerPromise = (0, issuers_repo_1.updateIssuers)(issuer._id, issuer);
    await Promise.all([updatedIssuerPromise, updateCardNetworkPromise, updateCardReloadibilityPromise]);
};
exports.default = updateUsersUseCase;
//# sourceMappingURL=update-issuers.usecase.js.map