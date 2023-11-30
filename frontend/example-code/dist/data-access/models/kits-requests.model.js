"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.kitsRequestModel = void 0;
const mongoose_1 = require("mongoose");
const common_fields_model_1 = require("@/data-access/models/common-fields.model");
const kitsRequestsSchema = new mongoose_1.default.Schema({
    ...common_fields_model_1.default,
    request_count: { type: Number },
    kit_type: { type: String },
    product: { type: String },
    issuer: { type: String },
    client_id: { type: String },
    remark: { type: String },
    status: { type: String },
    business_name: { type: String },
    program_manager: { type: String },
    card_type: { type: String },
    card_variant: { type: String },
    card_design: { type: String }
});
exports.kitsRequestModel = mongoose_1.default.model('kitsRequests', kitsRequestsSchema);
//# sourceMappingURL=kits-requests.model.js.map