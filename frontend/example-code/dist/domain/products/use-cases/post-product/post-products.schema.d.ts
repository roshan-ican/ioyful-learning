export declare const createProductFastifySchema: {
    summary: string;
    tags: string[];
    security: {}[];
    body: import("@sinclair/typebox").TObject<{
        description: import("@sinclair/typebox").TString;
        name: import("@sinclair/typebox").TString;
        logo_url: import("@sinclair/typebox").TString;
        created_at: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        updated_at: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        updated_by: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        created_by: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    }>;
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
