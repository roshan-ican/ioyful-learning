import mongoose from 'mongoose';
export declare const kitsUploadLedger: mongoose.Model<{
    _id?: string | undefined;
    remark?: string | undefined;
    storageLink?: string | undefined;
    modifiedBy?: string | undefined;
    modifiedAt?: Date | undefined;
    status: string;
    createdAt: Date;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    _id?: string | undefined;
    remark?: string | undefined;
    storageLink?: string | undefined;
    modifiedBy?: string | undefined;
    modifiedAt?: Date | undefined;
    status: string;
    createdAt: Date;
}> & {
    _id?: string | undefined;
    remark?: string | undefined;
    storageLink?: string | undefined;
    modifiedBy?: string | undefined;
    modifiedAt?: Date | undefined;
    status: string;
    createdAt: Date;
} & Required<{
    _id: string;
}>, any>;
