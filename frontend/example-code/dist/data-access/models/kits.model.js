"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.kitsModel = void 0;
const mongoose_1 = require("mongoose");
const common_fields_model_1 = require("@/data-access/models/common-fields.model");
const kitsSchema = new mongoose_1.default.Schema({
    ...common_fields_model_1.default,
    kit_number: { type: String, unique: true },
    kit_type: { type: String },
    product: { type: String },
    issuer: { type: String },
    remark: { type: String },
    status: { type: String },
    assigned_client_id: { type: String },
    client_id: { type: String }
});
exports.kitsModel = mongoose_1.default.model('kits', kitsSchema);
//# sourceMappingURL=kits.model.js.map