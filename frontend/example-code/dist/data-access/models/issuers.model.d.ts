import mongoose from 'mongoose';
export declare const issuersModel: mongoose.Model<{
    _id?: string | undefined;
    name: string;
    program_type: string;
    logo_url: string;
    card_networks: {
        _id?: string | undefined;
        name: string;
        card_Type: string[];
    };
    status: boolean;
    card_reloadibility_type: {
        _id?: string | undefined;
        slab?: {
            _id?: string | undefined;
            bank_share?: number | undefined;
            min_amount?: number | undefined;
            max_amount?: number | undefined;
        }[] | undefined;
        fixed?: {
            _id?: string | undefined;
            bank_share?: number | undefined;
        } | undefined;
        name: string;
    };
    issuers_logo_path: string;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    _id?: string | undefined;
    name: string;
    program_type: string;
    logo_url: string;
    card_networks: {
        _id?: string | undefined;
        name: string;
        card_Type: string[];
    };
    status: boolean;
    card_reloadibility_type: {
        _id?: string | undefined;
        slab?: {
            _id?: string | undefined;
            bank_share?: number | undefined;
            min_amount?: number | undefined;
            max_amount?: number | undefined;
        }[] | undefined;
        fixed?: {
            _id?: string | undefined;
            bank_share?: number | undefined;
        } | undefined;
        name: string;
    };
    issuers_logo_path: string;
}> & {
    _id?: string | undefined;
    name: string;
    program_type: string;
    logo_url: string;
    card_networks: {
        _id?: string | undefined;
        name: string;
        card_Type: string[];
    };
    status: boolean;
    card_reloadibility_type: {
        _id?: string | undefined;
        slab?: {
            _id?: string | undefined;
            bank_share?: number | undefined;
            min_amount?: number | undefined;
            max_amount?: number | undefined;
        }[] | undefined;
        fixed?: {
            _id?: string | undefined;
            bank_share?: number | undefined;
        } | undefined;
        name: string;
    };
    issuers_logo_path: string;
} & Required<{
    _id: string;
}>, any>;
