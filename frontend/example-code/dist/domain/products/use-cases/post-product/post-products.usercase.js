"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const products_repo_1 = require("@/data-access/products.repo");
const createNewProduct = async (newProduct) => {
    const existingProducts = await (0, products_repo_1.getProductByName)(newProduct.name);
    if (existingProducts.length > 0) {
        throw new Error("Product already exists");
    }
    const createNewProduct = await (0, products_repo_1.createProduct)(newProduct);
    if (!createNewProduct) {
        throw new Error('Error creating Product');
    }
    return createNewProduct;
};
exports.default = createNewProduct;
//# sourceMappingURL=post-products.usercase.js.map