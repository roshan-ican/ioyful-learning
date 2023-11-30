/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { createClientDepositeBankAccountDetailsDTO, updateClientDepositeBankAccountDetailsDTO } from '@/domain/client/client-deposit-bank-account-details.schema';
declare const getAllClientsDepositesBankAccount: () => Promise<(import("mongoose").Document<unknown, {}, {
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
    _id: import("mongoose").Types.ObjectId;
})[]>;
declare const getClientDepositesBankAccount: (id: any) => Promise<(import("mongoose").Document<unknown, {}, {
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
    _id: import("mongoose").Types.ObjectId;
}) | null>;
declare const getDepositeBankAccountByAccountNumber: (accountNumber: string) => Promise<(import("mongoose").Document<unknown, {}, {
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
    _id: import("mongoose").Types.ObjectId;
}) | null>;
declare const updateDepositeBank: (id: string, updateProduct: updateClientDepositeBankAccountDetailsDTO) => Promise<import("mongoose").UpdateWriteOpResult>;
declare const createClientDepositesBankAccount: (newClientDepositeBankAccount: createClientDepositeBankAccountDetailsDTO) => Promise<import("mongoose").Document<unknown, {}, {
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
    _id: import("mongoose").Types.ObjectId;
}>;
export { createClientDepositesBankAccount, getAllClientsDepositesBankAccount, getClientDepositesBankAccount, getDepositeBankAccountByAccountNumber, updateDepositeBank };
