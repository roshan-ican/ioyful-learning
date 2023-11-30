"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardNetworkModel = void 0;
const mongoose_1 = require("mongoose");
const CardNetworkSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true },
    card_Type: [{ type: String }]
});
exports.CardNetworkModel = mongoose_1.default.model('CardNetworks', CardNetworkSchema);
//# sourceMappingURL=card-network.model.js.map