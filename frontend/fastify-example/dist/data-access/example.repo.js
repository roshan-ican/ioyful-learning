"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createExample = exports.getExamples = exports.getExample = void 0;
const example_model_1 = require("./models/example.model");
const getExamples = async () => {
    example_model_1.exampleModel.find({});
};
exports.getExamples = getExamples;
const getExample = async (id) => {
    example_model_1.exampleModel.findById({ id });
};
exports.getExample = getExample;
const createExample = async (newExample) => {
    return await example_model_1.exampleModel.create(newExample);
};
exports.createExample = createExample;
//# sourceMappingURL=example.repo.js.map