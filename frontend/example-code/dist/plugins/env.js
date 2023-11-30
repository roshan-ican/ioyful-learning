"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_plugin_1 = require("fastify-plugin");
const env_1 = require("@fastify/env");
const type_provider_typebox_1 = require("@fastify/type-provider-typebox");
const schema = type_provider_typebox_1.Type.Object({ DATABASE_URL: type_provider_typebox_1.Type.String() });
exports.default = (0, fastify_plugin_1.default)(async (fastify) => {
    const options = {
        dotenv: true,
        schema: schema
    };
    await fastify.register(env_1.default, options);
});
//# sourceMappingURL=env.js.map