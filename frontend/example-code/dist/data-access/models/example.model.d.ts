import mongoose from 'mongoose';
export declare const exampleModel: mongoose.Model<{
    _id: string;
    email: string;
    first_name: string;
    last_name: string;
    designation: string;
    employee_code: string;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    _id: string;
    email: string;
    first_name: string;
    last_name: string;
    designation: string;
    employee_code: string;
}> & {
    _id: string;
    email: string;
    first_name: string;
    last_name: string;
    designation: string;
    employee_code: string;
} & Required<{
    _id: string;
}>, any>;
