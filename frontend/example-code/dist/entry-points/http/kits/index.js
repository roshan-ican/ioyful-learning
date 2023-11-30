"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const create_bulk_kits_usecase_1 = require("@/domain/kits/use-cases/create-bulk-kits/create-bulk-kits.usecase");
const create_kits_requests_usecase_1 = require("@/domain/kit-requests/use-cases/create-kits-requests/create-kits-requests.usecase");
const constants_1 = require("@/common/constants");
const parseCSV_1 = require("@/common/utils/parseCSV");
const utils_1 = require("@/domain/kits/utils");
const constants = require("@/entry-points/http/kits/constants");
const update_kits_request_usecase_1 = require("@/domain/kit-requests/use-cases/update-kits-request/update-kits-request.usecase");
const update_bulk_kits_usecase_1 = require("@/domain/kits/use-cases/update-bulk-kits/update-bulk-kits.usecase");
const update_kits_request_schema_1 = require("@/domain/kit-requests/use-cases/update-kits-request/update-kits-request.schema");
const get_kits_requests_schema_1 = require("@/domain/kit-requests/use-cases/get-kits-requests/get-kits-requests.schema");
const get_kits_requests_usecase_1 = require("@/domain/kit-requests/use-cases/get-kits-requests/get-kits-requests.usecase");
const create_kits_requests_schema_1 = require("@/domain/kit-requests/use-cases/create-kits-requests/create-kits-requests.schema");
const kits = async (fastify, opts) => {
    fastify
        .withTypeProvider()
        .post('/', async function (request, response) {
        const { action } = request.query;
        if (action === 'bulkupload') {
            const data = await request.file({ limits: constants_1.CSV_FILE_LIMITS });
            const kitsList = await (0, parseCSV_1.parseCSV)(data);
            const parsedKitsList = (0, utils_1.parseBulkKitsRequest)(kitsList);
            (0, create_bulk_kits_usecase_1.default)(parsedKitsList);
            return { message: constants.BULK_UPLOAD_INITIATED };
        }
        else if (action === 'bulkassign') {
            const clientID = request.headers['client-id'];
            const kitsRequestId = request.headers['kits-request-id'];
            await (0, update_bulk_kits_usecase_1.default)(clientID, kitsRequestId);
            return { message: constants.KITS_ASSIGN_SUCCESSFUL };
        }
        else {
            return { message: constants.UNKNOWN_ACTION };
        }
    })
        .post('/requests', { schema: create_kits_requests_schema_1.createKitsRequestFastifySchema }, async function (request, response) {
        await (0, create_kits_requests_usecase_1.default)(request.body);
        return { message: constants.KITS_REQUESTS_SUCCESSFUL };
    })
        .patch('/requests', { schema: update_kits_request_schema_1.updateKitsRequestFastifySchema }, async function (request, response) {
        const clientID = request.headers['client-id'];
        const kitsId = request.headers['kits-id'];
        await (0, update_kits_request_usecase_1.default)(request.body, clientID, kitsId);
        return { message: constants.KITS_REQUESTS_UPDATED_SUCCESSFUL };
    })
        .get('/requests/', { schema: get_kits_requests_schema_1.getKitsRequestFastifySchema }, async function (request, response) {
        const kitsRequestsList = await (0, get_kits_requests_usecase_1.default)();
        return {
            message: constants.KITS_REQUESTS_UPDATED_SUCCESSFUL,
            kitsRequests: kitsRequestsList
        };
    });
};
exports.default = kits;
//# sourceMappingURL=index.js.map