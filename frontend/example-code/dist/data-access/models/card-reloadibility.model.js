"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardReloadibilityModel = void 0;
const mongoose_1 = require("mongoose");
const SlabSchema = new mongoose_1.default.Schema({
    min_amount: { type: Number, required: false },
    max_amount: { type: Number, required: false },
    bank_share: { type: Number, required: false }
});
const FixedSchema = new mongoose_1.default.Schema({
    bank_share: { type: Number, required: false }
});
const CardReloadibilitySchema = new mongoose_1.default.Schema({
    name: { type: String, required: true },
    slab: [SlabSchema],
    fixed: FixedSchema
});
exports.CardReloadibilityModel = mongoose_1.default.model('CardReloadibility', CardReloadibilitySchema);
//# sourceMappingURL=card-reloadibility.model.js.map