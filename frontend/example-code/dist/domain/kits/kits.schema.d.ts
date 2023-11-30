import { Static } from '@sinclair/typebox';
export declare const kitsSchema: import("@sinclair/typebox").TObject<{
    _id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    kit_number: import("@sinclair/typebox").TString;
    kit_type: import("@sinclair/typebox").TString;
    product: import("@sinclair/typebox").TString;
    issuer: import("@sinclair/typebox").TString;
    assigned_client_id: import("@sinclair/typebox").TString;
    client_id: import("@sinclair/typebox").TString;
    remark: import("@sinclair/typebox").TString;
    status: import("@sinclair/typebox").TString;
}>;
export declare const kitRequestSchema: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
    kit_number: import("@sinclair/typebox").TString;
    kit_type: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"PHYSICAL">, import("@sinclair/typebox").TLiteral<"VIRTUAL">]>;
}>>;
export type BulkKitsRequest = Static<typeof kitRequestSchema>;
export type Kits = Static<typeof kitsSchema>;
