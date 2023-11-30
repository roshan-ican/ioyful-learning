"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseBulkKitsRequest = void 0;
const kitsHeaders = {
    kit_number: 'Kit Number',
    kit_type: 'Kit Type'
};
const parseBulkKitsRequest = (kitsList) => {
    const result = [];
    const kitNumberSet = new Set();
    for (const kit of kitsList) {
        const kits = {};
        for (const [key, value] of Object.entries(kitsHeaders)) {
            kits[key] = kit[value];
        }
        if (kitNumberSet.has(kits.kit_number)) {
            throw new Error('Duplicate Kit number : ' + kits.kit_number);
        }
        kitNumberSet.add(kits.kit_number);
        result.push(kits);
    }
    return result;
};
exports.parseBulkKitsRequest = parseBulkKitsRequest;
//# sourceMappingURL=utils.js.map