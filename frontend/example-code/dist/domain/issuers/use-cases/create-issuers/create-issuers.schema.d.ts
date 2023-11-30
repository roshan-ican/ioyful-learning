export declare const createIssuersFastifySchema: {
    summary: string;
    tags: string[];
    security: {}[];
    body: import("@sinclair/typebox").TObject<{
        _id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        name: import("@sinclair/typebox").TString;
        program_type: import("@sinclair/typebox").TString;
        logo_url: import("@sinclair/typebox").TString;
        card_networks: import("@sinclair/typebox").TObject<{
            _id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            name: import("@sinclair/typebox").TString;
            card_Type: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
        }>;
        status: import("@sinclair/typebox").TBoolean;
        card_reloadibility_type: import("@sinclair/typebox").TObject<{
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
        }>;
        issuers_logo_path: import("@sinclair/typebox").TString;
    }>;
    response: {
        200: import("@sinclair/typebox").TObject<{
            _id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            name: import("@sinclair/typebox").TString;
            program_type: import("@sinclair/typebox").TString;
            logo_url: import("@sinclair/typebox").TString;
            card_networks: import("@sinclair/typebox").TObject<{
                _id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
                name: import("@sinclair/typebox").TString;
                card_Type: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
            }>;
            status: import("@sinclair/typebox").TBoolean;
            card_reloadibility_type: import("@sinclair/typebox").TObject<{
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
            }>;
            issuers_logo_path: import("@sinclair/typebox").TString;
        }>;
    };
};
