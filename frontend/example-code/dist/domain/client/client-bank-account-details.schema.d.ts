import { Static } from '@fastify/type-provider-typebox';
export declare const ClientBankAccountDetailsSchema: import("@sinclair/typebox").TObject<{
    _id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
    account_number: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    ifsc: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    clientHashId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    created_at: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    updated_at: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    updated_by: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    created_by: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
}>;
export type clientBankAccountDetails = Static<typeof ClientBankAccountDetailsSchema>;
export declare const createClientBankAccountRequestSchema: import("@sinclair/typebox").TObject<{
    name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    account_number: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    ifsc: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    clientHashId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    created_at: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    updated_at: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    updated_by: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    created_by: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
}>;
export type createClientBankAccountDetailsDTO = Static<typeof createClientBankAccountRequestSchema>;
export declare const updateClientBankAccountRequestSchema: import("@sinclair/typebox").TObject<{
    name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>>;
    account_number: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>>;
    ifsc: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>>;
    clientHashId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>>;
    created_at: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>>;
    updated_at: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>>;
    updated_by: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>>;
    created_by: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>>;
}>;
export type updateClientBankAccountDetailsDTO = Static<typeof updateClientBankAccountRequestSchema>;
export declare const createClientBankAccountResponseSchema: import("@sinclair/typebox").TObject<{
    _id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
    account_number: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    ifsc: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    clientHashId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    created_at: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    updated_at: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    updated_by: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    created_by: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
}>;
export declare const allBankAccountDetails: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
    _id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
    account_number: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    ifsc: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    clientHashId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    created_at: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    updated_at: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    updated_by: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    created_by: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
}>>;
