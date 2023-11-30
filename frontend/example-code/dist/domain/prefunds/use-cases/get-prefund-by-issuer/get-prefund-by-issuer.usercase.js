"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const clients_repo_1 = require("@/data-access/clients.repo");
const issuers_repo_1 = require("@/data-access/issuers.repo");
const prefund_repo_1 = require("@/data-access/prefund.repo");
var issuerNames;
(function (issuerNames) {
    issuerNames["TRANSCORP"] = "TRANSCORP";
    issuerNames["SBM"] = "SBM";
    issuerNames["YES"] = "YES";
})(issuerNames || (issuerNames = {}));
const getClientByIssuerId = async (queryOptions, issuerName) => {
    if (!(issuerName === issuerNames.YES ||
        issuerName === issuerNames.TRANSCORP ||
        issuerName === issuerNames.SBM)) {
        throw new Error('Invalid issuer name : ' + Object.values(issuerNames));
    }
    const issuer = await (0, issuers_repo_1.getIssuerByName)(issuerName);
    if (!issuer) {
        throw new Error('Error while fetching issuers');
    }
    const client = await (0, clients_repo_1.getClientsByIssuers)(issuer);
    const prefundsList = await (0, prefund_repo_1.getPrefundsByIssuer)(queryOptions, client);
    if (!prefundsList) {
        throw new Error('Error in fetching clients');
    }
    console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^');
    console.log(prefundsList);
    console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^');
    return prefundsList;
};
exports.default = getClientByIssuerId;
//# sourceMappingURL=get-prefund-by-issuer.usercase.js.map