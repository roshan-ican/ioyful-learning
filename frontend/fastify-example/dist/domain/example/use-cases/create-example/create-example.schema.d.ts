export declare const createExampleFastifySchema: {
    summary: string;
    tags: string[];
    security: {}[];
    headers: import("@sinclair/typebox").TObject<{
        authId: import("@sinclair/typebox").TString;
    }>;
    body: import("@sinclair/typebox").TObject<{
        first_name: import("@sinclair/typebox").TString;
        last_name: import("@sinclair/typebox").TString;
        designation: import("@sinclair/typebox").TString;
        employee_code: import("@sinclair/typebox").TString;
        email: import("@sinclair/typebox").TString;
    }>;
    response: {
        200: import("@sinclair/typebox").TObject<{
            _id: import("@sinclair/typebox").TString;
            first_name: import("@sinclair/typebox").TString;
            last_name: import("@sinclair/typebox").TString;
            designation: import("@sinclair/typebox").TString;
            employee_code: import("@sinclair/typebox").TString;
            email: import("@sinclair/typebox").TString;
        }>;
    };
};
