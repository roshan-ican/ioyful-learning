"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBulkKits = exports.getUnassignedKits = exports.createBulkKits = exports.createKits = void 0;
const kits_model_1 = require("@/data-access/models/kits.model");
const createKits = (kits) => {
    return kits_model_1.kitsModel.create(kits);
};
exports.createKits = createKits;
const createBulkKits = async (kitsList) => {
    const list = [];
    for (const kit of kitsList) {
        list.push({ insertOne: { document: kit } });
    }
    return await kits_model_1.kitsModel.bulkWrite(list);
};
exports.createBulkKits = createBulkKits;
const updateBulkKits = async (kitsList) => {
    for (const kit of kitsList) {
        const id = kit._id;
        delete kit._id;
        await kits_model_1.kitsModel.findOneAndUpdate({ _id: id }, kit);
    }
};
exports.updateBulkKits = updateBulkKits;
const getUnassignedKits = async (limit, kit_type) => {
    return await kits_model_1.kitsModel
        .find({ assigned_client_id: null, kit_type: kit_type })
        .limit(limit)
        .exec();
};
exports.getUnassignedKits = getUnassignedKits;
//# sourceMappingURL=kits.repo.js.map