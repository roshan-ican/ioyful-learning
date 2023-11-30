"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.options = exports.app = void 0;
const path_1 = require("path");
const autoload_1 = require("@fastify/autoload");
require("module-alias/register");
const connect_to_db_1 = require("@/data-access/config/connect-to-db");
const options = {};
exports.options = options;
const app = async (fastify, opts) => {
    (0, connect_to_db_1.connectDb)();
    void fastify.register(autoload_1.default, {
        dir: (0, path_1.join)(__dirname, 'plugins'),
    });
    void fastify.register(autoload_1.default, {
        dir: (0, path_1.join)(__dirname, './entry-points/http/'),
        options: Object.assign({ prefix: '/api/V2' }, opts)
    });
    fastify.ready(() => fastify.log.info(fastify.printRoutes()));
};
exports.app = app;
exports.default = app;
//# sourceMappingURL=app.js.map