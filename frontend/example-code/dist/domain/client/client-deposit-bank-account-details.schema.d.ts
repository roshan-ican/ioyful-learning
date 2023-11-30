import { Static } from '@fastify/type-provider-typebox';
export declare const ClientDepositBankAccountDetailsSchema: import("@sinclair/typebox").TObject<{
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
export type clientDepositeBankAccountDetails = Static<typeof ClientDepositBankAccountDetailsSchema>;
export declare const createClientDepositeBankAccountRequestSchema: import("@sinclair/typebox").TObject<{
    name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    account_number: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    ifsc: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    clientHashId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    created_at: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    updated_at: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    updated_by: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    created_by: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
}>;
export type createClientDepositeBankAccountDetailsDTO = Static<typeof createClientDepositeBankAccountRequestSchema>;
export declare const updateClientDepositeBankAccountRequestSchema: import("@sinclair/typebox").TObject<{
    name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>>;
    account_number: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>>;
    ifsc: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>>;
    clientHashId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>>;
    created_at: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>>;
    updated_at: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>>;
    updated_by: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>>;
    created_by: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>>;
}>;
export type updateClientDepositeBankAccountDetailsDTO = Static<typeof createClientDepositeBankAccountRequestSchema>;
export declare const createClientDepositeBankAccountResponseSchema: import("@sinclair/typebox").TObject<{
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
export declare const allClientsDepositeBankAccounts: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
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
