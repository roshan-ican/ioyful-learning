import mongoose from 'mongoose';
export declare const kitsModel: mongoose.Model<{
    _id?: string | undefined;
    status: string;
    issuer: string;
    kit_type: string;
    product: string;
    client_id: string;
    remark: string;
    kit_number: string;
    assigned_client_id: string;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    _id?: string | undefined;
    status: string;
    issuer: string;
    kit_type: string;
    product: string;
    client_id: string;
    remark: string;
    kit_number: string;
    assigned_client_id: string;
}> & {
    _id?: string | undefined;
    status: string;
    issuer: string;
    kit_type: string;
    product: string;
    client_id: string;
    remark: string;
    kit_number: string;
    assigned_client_id: string;
} & Required<{
    _id: string;
}>, any>;
