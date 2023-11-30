export declare const updateProductFastifySchema: {
    summary: string;
    tags: string[];
    headers: import("@sinclair/typebox").TObject<{
        id: import("@sinclair/typebox").TString;
    }>;
    body: import("@sinclair/typebox").TObject<{
        description: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        logo_url: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        created_at: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>>;
        updated_at: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>>;
        updated_by: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>>;
        created_by: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>>;
        isActive: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
    }>;
    security: {}[];
    response: {
        200: import("@sinclair/typebox").TObject<{
            _id: import("@sinclair/typebox").TString;
            name: import("@sinclair/typebox").TString;
            description: import("@sinclair/typebox").TString;
            logo_url: import("@sinclair/typebox").TString;
            isActive: import("@sinclair/typebox").TBoolean;
            created_at: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            updated_at: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            created_by: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            updated_by: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        }>;
    };
};
