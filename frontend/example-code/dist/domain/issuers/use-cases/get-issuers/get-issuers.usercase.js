"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const issuers_repo_1 = require("@/data-access/issuers.repo");
const getIssuers = async () => {
    const Issuers = await (0, issuers_repo_1.getAllIssuers)();
    if (!Issuers) {
        throw new Error('Error Fetching Issuers');
    }
    return Issuers;
};
exports.default = getIssuers;
//# sourceMappingURL=get-issuers.usercase.js.map