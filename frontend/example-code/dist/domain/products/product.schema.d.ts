import { Static } from '@fastify/type-provider-typebox';
export declare const productsSchema: import("@sinclair/typebox").TObject<{
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
export type Product = Static<typeof productsSchema>;
export declare const createProductRequestSchema: import("@sinclair/typebox").TObject<{
    description: import("@sinclair/typebox").TString;
    name: import("@sinclair/typebox").TString;
    logo_url: import("@sinclair/typebox").TString;
    created_at: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    updated_at: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    updated_by: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    created_by: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
}>;
export type createProductDTO = Static<typeof createProductRequestSchema>;
export declare const createProductResponseSchema: import("@sinclair/typebox").TObject<{
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
export declare const readProductRequestSchema: import("@sinclair/typebox").TObject<{
    _id: import("@sinclair/typebox").TString;
}>;
export declare const readProductResponseSchema: import("@sinclair/typebox").TObject<{
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
export declare const updateProductRequestSchema: import("@sinclair/typebox").TObject<{
    description: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    logo_url: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    created_at: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>>;
    updated_at: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>>;
    updated_by: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>>;
    created_by: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>>;
    isActive: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
}>;
export type updateProductDTO = Static<typeof updateProductRequestSchema>;
export declare const updateProductResponseSchema: import("@sinclair/typebox").TObject<{
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
export declare const deleteProductRequestSchema: import("@sinclair/typebox").TObject<{
    _id: import("@sinclair/typebox").TString;
}>;
export declare const deleteProductResponseSchema: import("@sinclair/typebox").TObject<{
    message: import("@sinclair/typebox").TString;
}>;
export declare const readProductsRequestSchema: import("@sinclair/typebox").TObject<{
    limit: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    offset: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
}>;
export declare const readProductsResponseSchema: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
    _id: import("@sinclair/typebox").TString;
    name: import("@sinclair/typebox").TString;
    description: import("@sinclair/typebox").TString;
    logo_url: import("@sinclair/typebox").TString;
    isActive: import("@sinclair/typebox").TBoolean;
    created_at: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    updated_at: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    created_by: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    updated_by: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
}>>;
