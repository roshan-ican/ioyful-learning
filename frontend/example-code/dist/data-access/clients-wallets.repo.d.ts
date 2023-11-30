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
import { createClientsWalletsDTO, updateClientsWalletsDTO } from '@/domain/client/client-wallet.schema';
declare const getAllClientWallets: () => Promise<(import("mongoose").Document<unknown, {}, {
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
    _id: import("mongoose").Types.ObjectId;
})[]>;
declare const getClientsWallets: (id: any) => Promise<(import("mongoose").Document<unknown, {}, {
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
    _id: import("mongoose").Types.ObjectId;
}) | null>;
declare const updateWallet: (id: string, updateWallet: updateClientsWalletsDTO) => Promise<import("mongoose").UpdateWriteOpResult>;
declare const createClientsWallets: (newClientsWallets: createClientsWalletsDTO) => Promise<import("mongoose").Document<unknown, {}, {
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
    _id: import("mongoose").Types.ObjectId;
}>;
export { createClientsWallets, getAllClientWallets, getClientsWallets, updateWallet };
