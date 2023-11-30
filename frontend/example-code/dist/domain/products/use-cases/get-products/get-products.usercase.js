"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const products_repo_1 = require("@/data-access/products.repo");
const getProduct = async (queryOptions) => {
    const products = await (0, products_repo_1.getAllProducts)(queryOptions);
    if (!products) {
        throw new Error('Error Fetching Products');
    }
    return products;
};
exports.default = getProduct;
//# sourceMappingURL=get-products.usercase.js.map