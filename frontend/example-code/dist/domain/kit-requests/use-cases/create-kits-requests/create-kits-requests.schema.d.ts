export declare const createKitsRequestFastifySchema: {
    summary: string;
    tags: string[];
    security: {}[];
    body: import("@sinclair/typebox").TObject<{
        issuer: import("@sinclair/typebox").TString;
        request_count: import("@sinclair/typebox").TNumber;
        kit_type: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"PHYSICAL">, import("@sinclair/typebox").TLiteral<"VIRTUAL">]>;
        product: import("@sinclair/typebox").TString;
        client_id: import("@sinclair/typebox").TString;
        business_name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        program_manager: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        card_type: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        card_variant: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        card_design: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    }>;
};
