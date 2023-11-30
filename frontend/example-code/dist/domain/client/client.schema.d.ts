import { Static } from '@fastify/type-provider-typebox';
import { StageEnum } from '@/common/enums';
export declare const clientSchema: import("@sinclair/typebox").TObject<{
    _id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
    buissness_name: import("@sinclair/typebox").TString;
    product_type: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
    client_type: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
    card_network: import("@sinclair/typebox").TString;
    mobile_number: import("@sinclair/typebox").TString;
    email: import("@sinclair/typebox").TString;
    issuer: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        _id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>>;
        name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        program_type: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        logo_url: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        card_networks: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            _id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            name: import("@sinclair/typebox").TString;
            card_Type: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
        }>>;
        status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
        card_reloadibility_type: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            _id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            name: import("@sinclair/typebox").TString;
            slab: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                _id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                min_amount: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                max_amount: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                bank_share: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            }>>>;
            fixed: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                _id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                bank_share: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            }>>;
        }>>;
        issuers_logo_path: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    }>>;
    stage: import("@sinclair/typebox").TEnum<typeof StageEnum>;
    isActive: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
    clientHashId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    name: import("@sinclair/typebox").TString;
    nkPoc: import("@sinclair/typebox").TString;
    client_bank: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
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
    client_deposit_bank: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
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
    client_wallet: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        _id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
        total_credits: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        total_debits: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        clientHashId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        created_at: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        updated_at: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        updated_by: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        created_by: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    }>>;
    created_at: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    updated_at: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
}>;
export type client = Static<typeof clientSchema>;
export declare const createClientRequestSchema: import("@sinclair/typebox").TObject<{
    name: import("@sinclair/typebox").TString;
    clientHashId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    created_at: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    updated_at: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    buissness_name: import("@sinclair/typebox").TString;
    product_type: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
    client_type: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
    card_network: import("@sinclair/typebox").TString;
    mobile_number: import("@sinclair/typebox").TString;
    email: import("@sinclair/typebox").TString;
    issuer: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        _id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>>;
        name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        program_type: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        logo_url: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        card_networks: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            _id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            name: import("@sinclair/typebox").TString;
            card_Type: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
        }>>;
        status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
        card_reloadibility_type: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            _id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            name: import("@sinclair/typebox").TString;
            slab: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                _id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                min_amount: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                max_amount: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                bank_share: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            }>>>;
            fixed: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                _id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                bank_share: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            }>>;
        }>>;
        issuers_logo_path: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    }>>;
    stage: import("@sinclair/typebox").TEnum<typeof StageEnum>;
    nkPoc: import("@sinclair/typebox").TString;
    client_bank: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
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
    client_deposit_bank: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
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
    client_wallet: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        _id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
        total_credits: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        total_debits: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        clientHashId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        created_at: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        updated_at: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        updated_by: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        created_by: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    }>>;
}>;
export type createClientDTO = Static<typeof createClientRequestSchema>;
export declare const createClientResponseSchema: import("@sinclair/typebox").TObject<{
    _id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
    buissness_name: import("@sinclair/typebox").TString;
    product_type: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
    client_type: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
    card_network: import("@sinclair/typebox").TString;
    mobile_number: import("@sinclair/typebox").TString;
    email: import("@sinclair/typebox").TString;
    issuer: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        _id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>>;
        name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        program_type: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        logo_url: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        card_networks: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            _id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            name: import("@sinclair/typebox").TString;
            card_Type: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
        }>>;
        status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
        card_reloadibility_type: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            _id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            name: import("@sinclair/typebox").TString;
            slab: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                _id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                min_amount: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                max_amount: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                bank_share: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            }>>>;
            fixed: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                _id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                bank_share: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            }>>;
        }>>;
        issuers_logo_path: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    }>>;
    stage: import("@sinclair/typebox").TEnum<typeof StageEnum>;
    isActive: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
    clientHashId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    name: import("@sinclair/typebox").TString;
    nkPoc: import("@sinclair/typebox").TString;
    client_bank: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
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
    client_deposit_bank: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
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
    client_wallet: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        _id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
        total_credits: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        total_debits: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        clientHashId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        created_at: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        updated_at: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        updated_by: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        created_by: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    }>>;
    created_at: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    updated_at: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
}>;
export declare const readClientRequestSchema: import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TInteger;
}>;
export declare const readClientResponseSchema: import("@sinclair/typebox").TObject<{
    _id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
    buissness_name: import("@sinclair/typebox").TString;
    product_type: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
    client_type: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
    card_network: import("@sinclair/typebox").TString;
    mobile_number: import("@sinclair/typebox").TString;
    email: import("@sinclair/typebox").TString;
    issuer: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        _id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>>;
        name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        program_type: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        logo_url: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        card_networks: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            _id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            name: import("@sinclair/typebox").TString;
            card_Type: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
        }>>;
        status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
        card_reloadibility_type: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            _id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            name: import("@sinclair/typebox").TString;
            slab: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                _id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                min_amount: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                max_amount: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                bank_share: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            }>>>;
            fixed: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                _id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                bank_share: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            }>>;
        }>>;
        issuers_logo_path: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    }>>;
    stage: import("@sinclair/typebox").TEnum<typeof StageEnum>;
    isActive: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
    clientHashId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    name: import("@sinclair/typebox").TString;
    nkPoc: import("@sinclair/typebox").TString;
    client_bank: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
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
    client_deposit_bank: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
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
    client_wallet: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        _id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
        total_credits: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        total_debits: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        clientHashId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        created_at: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        updated_at: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        updated_by: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        created_by: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    }>>;
    created_at: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    updated_at: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
}>;
export declare const updateClientRequestSchema: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
    name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    clientHashId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>>;
    created_at: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>>;
    updated_at: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>>;
    buissness_name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    product_type: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>>;
    client_type: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>>;
    card_network: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    mobile_number: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    email: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    issuer: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        _id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>>;
        name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        program_type: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        logo_url: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        card_networks: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            _id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            name: import("@sinclair/typebox").TString;
            card_Type: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
        }>>;
        status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
        card_reloadibility_type: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            _id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            name: import("@sinclair/typebox").TString;
            slab: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                _id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                min_amount: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                max_amount: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                bank_share: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            }>>>;
            fixed: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                _id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                bank_share: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            }>>;
        }>>;
        issuers_logo_path: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    }>>>;
    stage: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TEnum<typeof StageEnum>>;
    isActive: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>>;
    nkPoc: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    client_bank: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        _id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
        account_number: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        ifsc: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        clientHashId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        created_at: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        updated_at: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        updated_by: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        created_by: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    }>>>;
    client_deposit_bank: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        _id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
        account_number: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        ifsc: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        clientHashId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        created_at: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        updated_at: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        updated_by: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        created_by: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    }>>>;
    client_wallet: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        _id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
        total_credits: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        total_debits: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        clientHashId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        created_at: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        updated_at: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        updated_by: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        created_by: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    }>>>;
}>>;
export type updateClientDTO = Static<typeof updateClientRequestSchema>;
export declare const updateClientResponseSchema: import("@sinclair/typebox").TObject<{
    _id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
    buissness_name: import("@sinclair/typebox").TString;
    product_type: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
    client_type: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
    card_network: import("@sinclair/typebox").TString;
    mobile_number: import("@sinclair/typebox").TString;
    email: import("@sinclair/typebox").TString;
    issuer: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        _id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>>;
        name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        program_type: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        logo_url: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        card_networks: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            _id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            name: import("@sinclair/typebox").TString;
            card_Type: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
        }>>;
        status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
        card_reloadibility_type: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            _id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            name: import("@sinclair/typebox").TString;
            slab: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                _id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                min_amount: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                max_amount: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                bank_share: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            }>>>;
            fixed: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                _id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                bank_share: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            }>>;
        }>>;
        issuers_logo_path: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    }>>;
    stage: import("@sinclair/typebox").TEnum<typeof StageEnum>;
    isActive: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
    clientHashId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    name: import("@sinclair/typebox").TString;
    nkPoc: import("@sinclair/typebox").TString;
    client_bank: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
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
    client_deposit_bank: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
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
    client_wallet: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        _id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
        total_credits: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        total_debits: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        clientHashId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        created_at: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        updated_at: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        updated_by: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        created_by: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    }>>;
    created_at: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    updated_at: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
}>;
export declare const deleteClientRequestSchema: import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TInteger;
}>;
export declare const deleteClientResponseSchema: import("@sinclair/typebox").TObject<{
    message: import("@sinclair/typebox").TString;
}>;
export declare const readClientsRequestSchema: import("@sinclair/typebox").TObject<{
    limit: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    offset: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
}>;
export declare const readClientsResponseSchema: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
    name: import("@sinclair/typebox").TString;
    clientHashId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    created_at: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    updated_at: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    buissness_name: import("@sinclair/typebox").TString;
    product_type: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
    client_type: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
    card_network: import("@sinclair/typebox").TString;
    mobile_number: import("@sinclair/typebox").TString;
    email: import("@sinclair/typebox").TString;
    issuer: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        _id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>>;
        name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        program_type: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        logo_url: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        card_networks: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            _id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            name: import("@sinclair/typebox").TString;
            card_Type: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
        }>>;
        status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
        card_reloadibility_type: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            _id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            name: import("@sinclair/typebox").TString;
            slab: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
                _id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                min_amount: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                max_amount: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
                bank_share: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            }>>>;
            fixed: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
                _id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                bank_share: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            }>>;
        }>>;
        issuers_logo_path: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    }>>;
    stage: import("@sinclair/typebox").TEnum<typeof StageEnum>;
    isActive: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
    nkPoc: import("@sinclair/typebox").TString;
    client_bank: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
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
    client_deposit_bank: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
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
    client_wallet: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        _id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
        total_credits: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        total_debits: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        clientHashId: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        created_at: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        updated_at: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        updated_by: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        created_by: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    }>>;
}>>;
export declare const updateClientBankRequestSchema: import("@sinclair/typebox").TObject<{
    client_bank: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        account_number: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        ifsc: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    }>>;
}>;
export type updateClientBankDTO = Static<typeof updateClientBankRequestSchema>;
