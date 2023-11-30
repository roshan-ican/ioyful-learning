export declare const updateKitsRequestFastifySchema: {
    summary: string;
    tags: string[];
    security: {}[];
    headers: import("@sinclair/typebox").TObject<{
        'client-id': import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        'kits-id': import("@sinclair/typebox").TString;
    }>;
    body: import("@sinclair/typebox").TObject<{
        request_count: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        kit_type: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"PHYSICAL">, import("@sinclair/typebox").TLiteral<"VIRTUAL">]>>;
        product: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        issuer: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        client_id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        remark: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        business_name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        program_manager: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        card_type: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        card_variant: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        card_design: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    }>;
};
