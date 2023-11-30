"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.issuersModel = void 0;
const mongoose_1 = require("mongoose");
const IssuersSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true },
    program_type: { type: String, required: true },
    logo_url: { type: String, required: true },
    card_networks: { type: mongoose_1.default.Schema.Types.ObjectId, ref: 'CardNetworks' },
    status: { type: Boolean, required: true },
    card_reloadibility_type: { type: mongoose_1.default.Schema.Types.ObjectId, ref: 'CardReloadibility' }
});
exports.issuersModel = mongoose_1.default.model('issuers', IssuersSchema);
//# sourceMappingURL=issuers.model.js.map