import mongoose from 'mongoose';
import { client } from '@/domain/client/client.schema';
import { ExtendedModel } from '../common/types';
interface IClientModel extends ExtendedModel<client> {
}
export declare const CardNetwork: mongoose.Model<{
    name?: string | undefined;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    name?: string | undefined;
}> & {
    name?: string | undefined;
} & {
    _id: mongoose.Types.ObjectId;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    name?: string | undefined;
}, mongoose.Document<unknown, {}, {
    name?: string | undefined;
}> & {
    name?: string | undefined;
} & {
    _id: mongoose.Types.ObjectId;
}>>;
export declare const ClientType: mongoose.Model<{
    name?: string | undefined;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    name?: string | undefined;
}> & {
    name?: string | undefined;
} & {
    _id: mongoose.Types.ObjectId;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    name?: string | undefined;
}, mongoose.Document<unknown, {}, {
    name?: string | undefined;
}> & {
    name?: string | undefined;
} & {
    _id: mongoose.Types.ObjectId;
}>>;
export declare const CardReloadabilityType: mongoose.Model<{
    name?: string | undefined;
    interchange_rate?: mongoose.Types.ObjectId | undefined;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    name?: string | undefined;
    interchange_rate?: mongoose.Types.ObjectId | undefined;
}> & {
    name?: string | undefined;
    interchange_rate?: mongoose.Types.ObjectId | undefined;
} & {
    _id: mongoose.Types.ObjectId;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    name?: string | undefined;
    interchange_rate?: mongoose.Types.ObjectId | undefined;
}, mongoose.Document<unknown, {}, {
    name?: string | undefined;
    interchange_rate?: mongoose.Types.ObjectId | undefined;
}> & {
    name?: string | undefined;
    interchange_rate?: mongoose.Types.ObjectId | undefined;
} & {
    _id: mongoose.Types.ObjectId;
}>>;
export declare const ClientsWallets: mongoose.Model<{
    _id?: any;
    clientHashId?: string | undefined;
    created_at?: string | undefined;
    updated_at?: string | undefined;
    updated_by?: string | undefined;
    created_by?: string | undefined;
    total_credits?: string | undefined;
    total_debits?: string | undefined;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    _id?: any;
    clientHashId?: string | undefined;
    created_at?: string | undefined;
    updated_at?: string | undefined;
    updated_by?: string | undefined;
    created_by?: string | undefined;
    total_credits?: string | undefined;
    total_debits?: string | undefined;
}> & {
    _id?: any;
    clientHashId?: string | undefined;
    created_at?: string | undefined;
    updated_at?: string | undefined;
    updated_by?: string | undefined;
    created_by?: string | undefined;
    total_credits?: string | undefined;
    total_debits?: string | undefined;
} & {
    _id: mongoose.Types.ObjectId;
}, mongoose.Schema<{
    _id?: any;
    clientHashId?: string | undefined;
    created_at?: string | undefined;
    updated_at?: string | undefined;
    updated_by?: string | undefined;
    created_by?: string | undefined;
    total_credits?: string | undefined;
    total_debits?: string | undefined;
}, mongoose.Model<{
    _id?: any;
    clientHashId?: string | undefined;
    created_at?: string | undefined;
    updated_at?: string | undefined;
    updated_by?: string | undefined;
    created_by?: string | undefined;
    total_credits?: string | undefined;
    total_debits?: string | undefined;
}, any, any, any, mongoose.Document<unknown, any, {
    _id?: any;
    clientHashId?: string | undefined;
    created_at?: string | undefined;
    updated_at?: string | undefined;
    updated_by?: string | undefined;
    created_by?: string | undefined;
    total_credits?: string | undefined;
    total_debits?: string | undefined;
}> & {
    _id?: any;
    clientHashId?: string | undefined;
    created_at?: string | undefined;
    updated_at?: string | undefined;
    updated_by?: string | undefined;
    created_by?: string | undefined;
    total_credits?: string | undefined;
    total_debits?: string | undefined;
} & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    _id?: any;
    clientHashId?: string | undefined;
    created_at?: string | undefined;
    updated_at?: string | undefined;
    updated_by?: string | undefined;
    created_by?: string | undefined;
    total_credits?: string | undefined;
    total_debits?: string | undefined;
}, mongoose.Document<unknown, {}, {
    _id?: any;
    clientHashId?: string | undefined;
    created_at?: string | undefined;
    updated_at?: string | undefined;
    updated_by?: string | undefined;
    created_by?: string | undefined;
    total_credits?: string | undefined;
    total_debits?: string | undefined;
}> & {
    _id?: any;
    clientHashId?: string | undefined;
    created_at?: string | undefined;
    updated_at?: string | undefined;
    updated_by?: string | undefined;
    created_by?: string | undefined;
    total_credits?: string | undefined;
    total_debits?: string | undefined;
} & {
    _id: mongoose.Types.ObjectId;
}>>;
export declare const ClientBankAccount: mongoose.Model<{
    _id?: any;
    name?: string | undefined;
    account_number?: string | undefined;
    ifsc?: string | undefined;
    clientHashId?: string | undefined;
    created_at?: string | undefined;
    updated_at?: string | undefined;
    updated_by?: string | undefined;
    created_by?: string | undefined;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    _id?: any;
    name?: string | undefined;
    account_number?: string | undefined;
    ifsc?: string | undefined;
    clientHashId?: string | undefined;
    created_at?: string | undefined;
    updated_at?: string | undefined;
    updated_by?: string | undefined;
    created_by?: string | undefined;
}> & {
    _id?: any;
    name?: string | undefined;
    account_number?: string | undefined;
    ifsc?: string | undefined;
    clientHashId?: string | undefined;
    created_at?: string | undefined;
    updated_at?: string | undefined;
    updated_by?: string | undefined;
    created_by?: string | undefined;
} & {
    _id: mongoose.Types.ObjectId;
}, mongoose.Schema<{
    _id?: any;
    name?: string | undefined;
    account_number?: string | undefined;
    ifsc?: string | undefined;
    clientHashId?: string | undefined;
    created_at?: string | undefined;
    updated_at?: string | undefined;
    updated_by?: string | undefined;
    created_by?: string | undefined;
}, mongoose.Model<{
    _id?: any;
    name?: string | undefined;
    account_number?: string | undefined;
    ifsc?: string | undefined;
    clientHashId?: string | undefined;
    created_at?: string | undefined;
    updated_at?: string | undefined;
    updated_by?: string | undefined;
    created_by?: string | undefined;
}, any, any, any, mongoose.Document<unknown, any, {
    _id?: any;
    name?: string | undefined;
    account_number?: string | undefined;
    ifsc?: string | undefined;
    clientHashId?: string | undefined;
    created_at?: string | undefined;
    updated_at?: string | undefined;
    updated_by?: string | undefined;
    created_by?: string | undefined;
}> & {
    _id?: any;
    name?: string | undefined;
    account_number?: string | undefined;
    ifsc?: string | undefined;
    clientHashId?: string | undefined;
    created_at?: string | undefined;
    updated_at?: string | undefined;
    updated_by?: string | undefined;
    created_by?: string | undefined;
} & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    _id?: any;
    name?: string | undefined;
    account_number?: string | undefined;
    ifsc?: string | undefined;
    clientHashId?: string | undefined;
    created_at?: string | undefined;
    updated_at?: string | undefined;
    updated_by?: string | undefined;
    created_by?: string | undefined;
}, mongoose.Document<unknown, {}, {
    _id?: any;
    name?: string | undefined;
    account_number?: string | undefined;
    ifsc?: string | undefined;
    clientHashId?: string | undefined;
    created_at?: string | undefined;
    updated_at?: string | undefined;
    updated_by?: string | undefined;
    created_by?: string | undefined;
}> & {
    _id?: any;
    name?: string | undefined;
    account_number?: string | undefined;
    ifsc?: string | undefined;
    clientHashId?: string | undefined;
    created_at?: string | undefined;
    updated_at?: string | undefined;
    updated_by?: string | undefined;
    created_by?: string | undefined;
} & {
    _id: mongoose.Types.ObjectId;
}>>;
export declare const ClientDepositBankAccount: mongoose.Model<{
    _id?: any;
    name?: string | undefined;
    account_number?: string | undefined;
    ifsc?: string | undefined;
    clientHashId?: string | undefined;
    created_at?: string | undefined;
    updated_at?: string | undefined;
    updated_by?: string | undefined;
    created_by?: string | undefined;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    _id?: any;
    name?: string | undefined;
    account_number?: string | undefined;
    ifsc?: string | undefined;
    clientHashId?: string | undefined;
    created_at?: string | undefined;
    updated_at?: string | undefined;
    updated_by?: string | undefined;
    created_by?: string | undefined;
}> & {
    _id?: any;
    name?: string | undefined;
    account_number?: string | undefined;
    ifsc?: string | undefined;
    clientHashId?: string | undefined;
    created_at?: string | undefined;
    updated_at?: string | undefined;
    updated_by?: string | undefined;
    created_by?: string | undefined;
} & {
    _id: mongoose.Types.ObjectId;
}, mongoose.Schema<{
    _id?: any;
    name?: string | undefined;
    account_number?: string | undefined;
    ifsc?: string | undefined;
    clientHashId?: string | undefined;
    created_at?: string | undefined;
    updated_at?: string | undefined;
    updated_by?: string | undefined;
    created_by?: string | undefined;
}, mongoose.Model<{
    _id?: any;
    name?: string | undefined;
    account_number?: string | undefined;
    ifsc?: string | undefined;
    clientHashId?: string | undefined;
    created_at?: string | undefined;
    updated_at?: string | undefined;
    updated_by?: string | undefined;
    created_by?: string | undefined;
}, any, any, any, mongoose.Document<unknown, any, {
    _id?: any;
    name?: string | undefined;
    account_number?: string | undefined;
    ifsc?: string | undefined;
    clientHashId?: string | undefined;
    created_at?: string | undefined;
    updated_at?: string | undefined;
    updated_by?: string | undefined;
    created_by?: string | undefined;
}> & {
    _id?: any;
    name?: string | undefined;
    account_number?: string | undefined;
    ifsc?: string | undefined;
    clientHashId?: string | undefined;
    created_at?: string | undefined;
    updated_at?: string | undefined;
    updated_by?: string | undefined;
    created_by?: string | undefined;
} & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    _id?: any;
    name?: string | undefined;
    account_number?: string | undefined;
    ifsc?: string | undefined;
    clientHashId?: string | undefined;
    created_at?: string | undefined;
    updated_at?: string | undefined;
    updated_by?: string | undefined;
    created_by?: string | undefined;
}, mongoose.Document<unknown, {}, {
    _id?: any;
    name?: string | undefined;
    account_number?: string | undefined;
    ifsc?: string | undefined;
    clientHashId?: string | undefined;
    created_at?: string | undefined;
    updated_at?: string | undefined;
    updated_by?: string | undefined;
    created_by?: string | undefined;
}> & {
    _id?: any;
    name?: string | undefined;
    account_number?: string | undefined;
    ifsc?: string | undefined;
    clientHashId?: string | undefined;
    created_at?: string | undefined;
    updated_at?: string | undefined;
    updated_by?: string | undefined;
    created_by?: string | undefined;
} & {
    _id: mongoose.Types.ObjectId;
}>>;
export declare const Client: IClientModel;
export {};
