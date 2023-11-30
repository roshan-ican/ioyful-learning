"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const get_products_1 = require("@/domain/products/use-cases/get-products");
const get_products_schema_1 = require("@/domain/products/use-cases/get-products/get-products.schema");
const post_products_usercase_1 = require("@/domain/products/use-cases/post-product/post-products.usercase");
const post_products_schema_1 = require("@/domain/products/use-cases/post-product/post-products.schema");
const put_products_usercase_1 = require("@/domain/products/use-cases/put-product/put-products.usercase");
const put_products_schema_1 = require("@/domain/products/use-cases/put-product/put-products.schema");
const product = async (fastify, opts) => {
    fastify
        .withTypeProvider()
        .get('/', { schema: get_products_schema_1.getProductFastifySchema }, async function (request, reply) {
        const products = await (0, get_products_1.default)(request.query);
        reply.send(products);
    })
        .post('/', { schema: post_products_schema_1.createProductFastifySchema }, async function (request, response) {
        const createProduct = await (0, post_products_usercase_1.default)(request.body);
        return createProduct;
    })
        .put('/', { schema: put_products_schema_1.updateProductFastifySchema }, async function (request, response) {
        const updateProd = await (0, put_products_usercase_1.default)(request.headers.id, request.body);
        return updateProd;
    });
};
exports.default = product;
//# sourceMappingURL=index.js.map