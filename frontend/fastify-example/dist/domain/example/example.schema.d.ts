import { Static } from '@sinclair/typebox';
export declare const exampleSchema: import("@sinclair/typebox").TObject<{
    _id: import("@sinclair/typebox").TString;
    first_name: import("@sinclair/typebox").TString;
    last_name: import("@sinclair/typebox").TString;
    designation: import("@sinclair/typebox").TString;
    employee_code: import("@sinclair/typebox").TString;
    email: import("@sinclair/typebox").TString;
}>;
export type Example = Static<typeof exampleSchema>;
export declare const createExampleRequestDTO: import("@sinclair/typebox").TObject<{
    first_name: import("@sinclair/typebox").TString;
    last_name: import("@sinclair/typebox").TString;
    designation: import("@sinclair/typebox").TString;
    employee_code: import("@sinclair/typebox").TString;
    email: import("@sinclair/typebox").TString;
}>;
export type createExampleDTO = Static<typeof createExampleRequestDTO>;
export declare const createExampleResponseDTO: import("@sinclair/typebox").TObject<{
    _id: import("@sinclair/typebox").TString;
    first_name: import("@sinclair/typebox").TString;
    last_name: import("@sinclair/typebox").TString;
    designation: import("@sinclair/typebox").TString;
    employee_code: import("@sinclair/typebox").TString;
    email: import("@sinclair/typebox").TString;
}>;
export declare const readExampleRequestSchema: import("@sinclair/typebox").TObject<{
    _id: import("@sinclair/typebox").TString;
}>;
export declare const readExampleResponseSchema: import("@sinclair/typebox").TObject<{
    _id: import("@sinclair/typebox").TString;
    first_name: import("@sinclair/typebox").TString;
    last_name: import("@sinclair/typebox").TString;
    designation: import("@sinclair/typebox").TString;
    employee_code: import("@sinclair/typebox").TString;
    email: import("@sinclair/typebox").TString;
}>;
export declare const updateExampleRequestSchema: import("@sinclair/typebox").TObject<{
    _id: import("@sinclair/typebox").TString;
    example: import("@sinclair/typebox").TObject<{
        _id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        first_name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        last_name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        designation: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        employee_code: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        email: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    }>;
}>;
export declare const updateExampleResponseSchema: import("@sinclair/typebox").TObject<{
    _id: import("@sinclair/typebox").TString;
    first_name: import("@sinclair/typebox").TString;
    last_name: import("@sinclair/typebox").TString;
    designation: import("@sinclair/typebox").TString;
    employee_code: import("@sinclair/typebox").TString;
    email: import("@sinclair/typebox").TString;
}>;
export declare const deleteExampleRequestSchema: import("@sinclair/typebox").TObject<{
    _id: import("@sinclair/typebox").TString;
}>;
export declare const deleteExampleResponseSchema: import("@sinclair/typebox").TObject<{
    message: import("@sinclair/typebox").TString;
}>;
export declare const readExamplesRequestSchema: import("@sinclair/typebox").TObject<{
    limit: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    offset: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
}>;
export declare const readExamplesResponseSchema: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
    _id: import("@sinclair/typebox").TString;
    first_name: import("@sinclair/typebox").TString;
    last_name: import("@sinclair/typebox").TString;
    designation: import("@sinclair/typebox").TString;
    employee_code: import("@sinclair/typebox").TString;
    email: import("@sinclair/typebox").TString;
}>>;
export declare const headerSchema: import("@sinclair/typebox").TObject<{
    authId: import("@sinclair/typebox").TString;
}>;
