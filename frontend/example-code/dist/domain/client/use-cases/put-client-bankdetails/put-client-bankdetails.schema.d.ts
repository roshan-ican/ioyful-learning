export declare const updateClientBankDetailsFastifySchema: {
    summary: string;
    tags: string[];
    security: {}[];
    params: import("@sinclair/typebox").TObject<{
        id: import("@sinclair/typebox").TString;
    }>;
    headers: import("@sinclair/typebox").TObject<{
        id: import("@sinclair/typebox").TString;
    }>;
    body: import("@sinclair/typebox").TObject<{
        client_bank: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            account_number: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            ifsc: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        }>>;
    }>;
    response: {
        200: import("@sinclair/typebox").TObject<{
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
            stage: import("@sinclair/typebox").TEnum<typeof import("../../../../common/enums").StageEnum>;
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
    };
};
