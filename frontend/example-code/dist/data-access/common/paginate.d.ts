/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Schema, Document } from 'mongoose';
export interface QueryResult {
    results: Document[];
    page: number;
    limit: number;
    totalPages: number;
    totalResults: number;
}
export interface IOptions {
    sortBy?: string;
    projectBy?: string;
    populate?: string;
    limit?: number;
    page?: number;
}
declare const paginate: <T>(schema: Schema<T, import("mongoose").Model<T, any, any, any, import("mongoose").IfAny<T, any, Document<unknown, any, T> & import("mongoose").Require_id<T>>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, import("mongoose").ObtainDocumentType<any, T, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>>, import("mongoose").IfAny<import("mongoose").ObtainDocumentType<any, T, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>>, any, Document<unknown, {}, import("mongoose").ObtainDocumentType<any, T, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>>> & import("mongoose").Require_id<import("mongoose").ObtainDocumentType<any, T, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>>>>>) => void;
export default paginate;
