"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const upload_usecase_1 = require("@/domain/upload/upload.usecase");
const product = async (fastify, opts) => {
    fastify.withTypeProvider().post('/', async function (request, reply) {
        const file = await request.file();
        const data = await (0, upload_usecase_1.uploadHandler)(file);
        console.log(data, '<<<<< data');
        reply.status(201).send({ ...data });
    });
};
exports.default = product;
//# sourceMappingURL=index.js.map