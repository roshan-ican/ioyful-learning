export declare const postKitsSchema: {
    summary: string;
    tags: string[];
    security: {}[];
    consumes: string[];
    produces: string[];
    querystring: import("@sinclair/typebox").TObject<{
        action: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"bulkassign">, import("@sinclair/typebox").TLiteral<"bulkupload">]>;
    }>;
    body: import("@sinclair/typebox").TObject<{
        file: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TAny>;
    }>;
};
