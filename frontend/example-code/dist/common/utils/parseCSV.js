"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseCSV = void 0;
const csv = require('csv-parser');
const parseCSV = async (data) => {
    if (!data.filename.includes('.csv') || data.mimetype !== 'text/csv') {
        throw new Error('Not a csv file!');
    }
    const results = [];
    const onDataPromise = new Promise((resolve) => {
        data.file
            .pipe(csv())
            .on('data', (ab) => results.push(ab))
            .on('end', resolve);
    });
    await onDataPromise;
    return results;
};
exports.parseCSV = parseCSV;
//# sourceMappingURL=parseCSV.js.map