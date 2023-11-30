"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const example_repo_1 = require("@/data-access/example.repo");
const createExampleUseCase = async (newExample) => {
    const newExampleCreated = await (0, example_repo_1.createExample)(newExample);
    if (!newExampleCreated) {
        throw new Error('Error creating example');
    }
    return newExampleCreated;
};
exports.default = createExampleUseCase;
//# sourceMappingURL=create-example.usecase.js.map