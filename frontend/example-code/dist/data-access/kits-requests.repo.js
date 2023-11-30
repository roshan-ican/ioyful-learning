"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getKitsRequests = exports.findKitsRequest = exports.updateKitsRequests = exports.createKitsRequests = void 0;
const kits_requests_model_1 = require("@/data-access/models/kits-requests.model");
const createKitsRequests = async (data) => {
    return await kits_requests_model_1.kitsRequestModel.create(data);
};
exports.createKitsRequests = createKitsRequests;
const getKitsRequests = async () => {
    return await kits_requests_model_1.kitsRequestModel.find();
};
exports.getKitsRequests = getKitsRequests;
const updateKitsRequests = async (id, data) => {
    return await kits_requests_model_1.kitsRequestModel.updateOne({ _id: id }, data);
};
exports.updateKitsRequests = updateKitsRequests;
const findKitsRequest = async (id) => {
    return await kits_requests_model_1.kitsRequestModel.findById(id);
};
exports.findKitsRequest = findKitsRequest;
//# sourceMappingURL=kits-requests.repo.js.map