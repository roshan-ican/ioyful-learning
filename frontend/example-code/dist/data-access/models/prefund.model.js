"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prefundModel = void 0;
const mongoose_1 = require("mongoose");
const prefunds_schema_1 = require("@/domain/prefunds/prefunds.schema");
const common_fields_model_1 = require("@/data-access/models/common-fields.model");
const paginate_1 = require("@/data-access/common/paginate");
const prefundsSchema = new mongoose_1.default.Schema({
    transaction_id: {
        type: String,
        unique: true
    },
    transaction_type: {
        type: String,
        enum: {
            values: Object.values(prefunds_schema_1.TransactionType),
            message: `{VALUE} is not supported`
        }
    },
    status: {
        type: String,
        enum: {
            values: Object.values(prefunds_schema_1.TransactionStatus),
            message: '{VALUE} is not supported'
        }
    },
    prefund_type: {
        type: String,
        enum: {
            values: Object.values(prefunds_schema_1.PrefundType),
            message: '{VALUE} is not supported'
        }
    },
    amount: {
        type: String,
        minlength: 1
    },
    remark: {
        type: String
    },
    client_id: {
        type: mongoose_1.default.Schema.ObjectId,
        ref: 'Client'
    },
    bank_account_id: {
        type: String
    },
    ...common_fields_model_1.default
});
prefundsSchema.plugin((paginate_1.default));
exports.prefundModel = mongoose_1.default.model('prefunds', prefundsSchema);
//# sourceMappingURL=prefund.model.js.map