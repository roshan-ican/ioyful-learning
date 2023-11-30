import { TObject } from '@fastify/type-provider-typebox';
export declare const extendQueryParams: (schema: TObject) => import("@sinclair/typebox").TIntersect<[TObject<{
    [x: string]: any;
}>, TObject<{
    sortBy: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    projectBy: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    populate: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    limit: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    page: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
}>]>;
export declare const queryResultSchema: (itemSchema: TObject) => TObject;
