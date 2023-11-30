"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDb = void 0;
const mongoose_1 = require("mongoose");
const connectDb = () => {
    mongoose_1.default
        .connect(process.env.DATASE_URL ||
        'mongodb+srv://guru:5q5rL1gwDfrivQer@cluster0.krmnh0o.mongodb.net/?retryWrites=true&w=majority', {})
        .then((res) => {
        console.log('mongodb connected successfully');
    })
        .catch((err) => {
        console.log(err, '-->');
    });
};
exports.connectDb = connectDb;
//# sourceMappingURL=connect-to-db.js.map