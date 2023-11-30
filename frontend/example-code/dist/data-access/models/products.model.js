"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productModel = void 0;
const mongoose_1 = require("mongoose");
const common_fields_model_1 = require("@/data-access/models/common-fields.model");
const paginate_1 = require("@/data-access/common/paginate");
const productsSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    logo_url: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        default: true
    },
    ...common_fields_model_1.default
});
productsSchema.plugin((paginate_1.default));
exports.productModel = mongoose_1.default.model('product', productsSchema);
//# sourceMappingURL=products.model.js.map