"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProductByName = exports.updateProduct = exports.getAllProducts = exports.createProduct = exports.getProduct = exports.getProducts = void 0;
const products_model_1 = require("@/data-access/models/products.model");
const R = require("ramda");
const getProducts = async () => {
    products_model_1.productModel.find({});
};
exports.getProducts = getProducts;
const getAllProducts = async (queryOptions) => {
    const filter = R.pick(['name', 'role'], queryOptions);
    const options = R.pick(['sortBy', 'limit', 'page', 'projectBy'], queryOptions);
    return await products_model_1.productModel.paginate(filter, options);
};
exports.getAllProducts = getAllProducts;
const getProduct = async (id) => {
    const product = await products_model_1.productModel.findById(id);
    return product;
};
exports.getProduct = getProduct;
const getProductByName = async (name) => {
    const product = await products_model_1.productModel.find({ name });
    return product;
};
exports.getProductByName = getProductByName;
const createProduct = async (newProduct) => {
    return await products_model_1.productModel.create(newProduct);
};
exports.createProduct = createProduct;
const updateProduct = async (id, updateProduct) => {
    return await products_model_1.productModel.updateOne({ _id: id }, { $set: updateProduct });
};
exports.updateProduct = updateProduct;
//# sourceMappingURL=products.repo.js.map