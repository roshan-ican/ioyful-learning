export declare const getClientFastifySchema: {
    summary: string;
    tags: string[];
    security: {}[];
    querystring: import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
        [x: string]: any;
    }>, import("@sinclair/typebox").TObject<{
        sortBy: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        projectBy: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        populate: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        limit: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        page: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    }>]>;
    response: {
        200: import("@sinclair/typebox").TObject<import("@sinclair/typebox").TProperties>;
    };
};
