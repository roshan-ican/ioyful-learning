"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PROCESS_STATUS = exports.CSV_FILE_LIMITS = void 0;
exports.CSV_FILE_LIMITS = {
    fieldNameSize: 100,
    fieldSize: 100,
    fields: 10,
    fileSize: 10000,
    files: 1,
    headerPairs: 2000,
    parts: 1000
};
var PROCESS_STATUS;
(function (PROCESS_STATUS) {
    PROCESS_STATUS["INITIATED"] = "INITIATED";
    PROCESS_STATUS["SUCCESSFUL"] = "SUCCESSFUL";
    PROCESS_STATUS["FAILED"] = "FAILED";
})(PROCESS_STATUS || (exports.PROCESS_STATUS = PROCESS_STATUS = {}));
//# sourceMappingURL=constants.js.map