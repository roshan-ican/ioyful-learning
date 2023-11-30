import { Static } from '@fastify/type-provider-typebox';
export declare const ClientsWalletsSchema: import("@sinclair/typebox").TObject<{
    _id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
    total_credits: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    total_debits: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    clientHashId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    created_at: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    updated_at: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    updated_by: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    created_by: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
}>;
export type clientsWallets = Static<typeof ClientsWalletsSchema>;
export declare const createClientBankAccountRequestSchema: import("@sinclair/typebox").TObject<{
    clientHashId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    created_at: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    updated_at: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    updated_by: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    created_by: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    total_credits: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    total_debits: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
}>;
export type createClientsWalletsDTO = Static<typeof createClientBankAccountRequestSchema>;
export declare const updateClientBankAccountRequestSchema: import("@sinclair/typebox").TObject<{
    clientHashId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>>;
    created_at: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>>;
    updated_at: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>>;
    updated_by: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>>;
    created_by: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>>;
    total_credits: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>>;
    total_debits: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>>;
}>;
export type updateClientsWalletsDTO = Static<typeof updateClientBankAccountRequestSchema>;
export declare const createClientBankAccountResponseSchema: import("@sinclair/typebox").TObject<{
    _id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
    total_credits: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    total_debits: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    clientHashId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    created_at: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    updated_at: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    updated_by: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    created_by: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
}>;
export declare const allBankAccountDetails: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
    _id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
    total_credits: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    total_debits: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    clientHashId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    created_at: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    updated_at: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    updated_by: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    created_by: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
}>>;
