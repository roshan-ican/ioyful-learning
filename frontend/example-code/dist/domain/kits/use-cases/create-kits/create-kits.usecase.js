"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const kits_repo_1 = require("@/data-access/kits.repo");
const createKitsUseCase = async (kitsData) => {
    const savedKits = await (0, kits_repo_1.createKits)(kitsData);
    return savedKits;
};
exports.default = createKitsUseCase;
//# sourceMappingURL=create-kits.usecase.js.map