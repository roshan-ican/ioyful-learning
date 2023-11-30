"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const products_repo_1 = require("@/data-access/products.repo");
const updateExistingProduct = async (_id, updateData) => {
    const fetchProduct = await (0, products_repo_1.getProduct)(_id);
    if (!fetchProduct) {
        throw new Error('Error fetching product');
    }
    if (updateData.name) {
        const duplicateProd = await (0, products_repo_1.getProductByName)(updateData.name);
        if (duplicateProd.length > 0) {
            throw new Error('Product already exists');
        }
    }
    updateData.updated_at = Date.now().toString();
    const updatedProduct = await (0, products_repo_1.updateProduct)(_id, updateData);
    if (!updatedProduct) {
        throw new Error('Error updating product');
    }
    fetchProduct.$set(updateData);
    return fetchProduct;
};
exports.default = updateExistingProduct;
//# sourceMappingURL=put-products.usercase.js.map