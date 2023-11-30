"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prefund_repo_1 = require("@/data-access/prefund.repo");
const getPrefund = async (queryOptions) => {
    const prefund = await (0, prefund_repo_1.getAllPrefunds)(queryOptions);
    if (!prefund) {
        throw new Error('Error Fetching Prefunds');
    }
    return prefund;
};
exports.default = getPrefund;
//# sourceMappingURL=get-prefunds.usercase.js.map