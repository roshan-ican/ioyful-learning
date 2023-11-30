"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateSchema = void 0;
const compiler_1 = require("@sinclair/typebox/compiler");
const validateSchema = (schema, value) => {
    var _a, _b;
    const C = compiler_1.TypeCompiler.Compile(schema);
    const result = C.Errors(value);
    if (result.First()) {
        throw new Error(((_a = result.First()) === null || _a === void 0 ? void 0 : _a.path) + " " + ((_b = result.First()) === null || _b === void 0 ? void 0 : _b.message));
    }
};
exports.validateSchema = validateSchema;
//# sourceMappingURL=validateSchema.js.map