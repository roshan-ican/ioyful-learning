import mongoose from 'mongoose';
export declare const exampleModel: mongoose.Model<{
    _id: string;
    first_name: string;
    last_name: string;
    designation: string;
    employee_code: string;
    email: string;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    _id: string;
    first_name: string;
    last_name: string;
    designation: string;
    employee_code: string;
    email: string;
}> & {
    _id: string;
    first_name: string;
    last_name: string;
    designation: string;
    employee_code: string;
    email: string;
} & Required<{
    _id: string;
}>, any>;
