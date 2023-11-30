"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_plugin_1 = require("fastify-plugin");
const env_1 = require("@fastify/env");
const schema = {
    type: 'object',
    required: ['MONGO_CONNECTION_STRING'],
    properties: {
        MONGO_CONNECTION_STRING: {
            type: 'string'
        }
    }
};
exports.default = (0, fastify_plugin_1.default)(async (fastify) => {
    const options = {
        dotenv: true,
        data: process.env,
        schema: schema
    };
    fastify.register(env_1.default, options);
    await fastify.after();
});
//# sourceMappingURL=env.js.map