import mongoose from 'mongoose';
export declare const kitsRequestModel: mongoose.Model<{
    _id?: string | undefined;
    business_name?: string | undefined;
    program_manager?: string | undefined;
    card_type?: string | undefined;
    card_variant?: string | undefined;
    card_design?: string | undefined;
    status: string;
    issuer: string;
    request_count: number;
    kit_type: "PHYSICAL" | "VIRTUAL";
    product: string;
    client_id: string;
    remark: string;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    _id?: string | undefined;
    business_name?: string | undefined;
    program_manager?: string | undefined;
    card_type?: string | undefined;
    card_variant?: string | undefined;
    card_design?: string | undefined;
    status: string;
    issuer: string;
    request_count: number;
    kit_type: "PHYSICAL" | "VIRTUAL";
    product: string;
    client_id: string;
    remark: string;
}> & {
    _id?: string | undefined;
    business_name?: string | undefined;
    program_manager?: string | undefined;
    card_type?: string | undefined;
    card_variant?: string | undefined;
    card_design?: string | undefined;
    status: string;
    issuer: string;
    request_count: number;
    kit_type: "PHYSICAL" | "VIRTUAL";
    product: string;
    client_id: string;
    remark: string;
} & Required<{
    _id: string;
}>, any>;
