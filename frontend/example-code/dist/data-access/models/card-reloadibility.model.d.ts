import mongoose from 'mongoose';
export declare const CardReloadibilityModel: mongoose.Model<{
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
}, {}, {}, {}, mongoose.Document<unknown, {}, {
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
}> & {
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
} & Required<{
    _id: string;
}>, mongoose.Schema<{
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
}, mongoose.Model<{
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
}, any, any, any, mongoose.Document<unknown, any, {
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
}> & {
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
} & Required<{
    _id: string;
}>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
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
}, mongoose.Document<unknown, {}, {
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
}> & {
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
} & Required<{
    _id: string;
}>>>;
