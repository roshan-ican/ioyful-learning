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
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
declare const createKits: (kits: any) => Promise<import("mongoose").Document<unknown, {}, {
    _id?: string | undefined;
    status: string;
    issuer: string;
    kit_type: string;
    product: string;
    client_id: string;
    remark: string;
    kit_number: string;
    assigned_client_id: string;
}> & {
    _id?: string | undefined;
    status: string;
    issuer: string;
    kit_type: string;
    product: string;
    client_id: string;
    remark: string;
    kit_number: string;
    assigned_client_id: string;
} & Required<{
    _id: string;
}>>;
declare const createBulkKits: (kitsList: {
    kit_type: "PHYSICAL" | "VIRTUAL";
    kit_number: string;
}[]) => Promise<import("mongodb").BulkWriteResult>;
declare const updateBulkKits: (kitsList: any) => Promise<void>;
declare const getUnassignedKits: (limit: number, kit_type: String) => Promise<(import("mongoose").Document<unknown, {}, {
    _id?: string | undefined;
    status: string;
    issuer: string;
    kit_type: string;
    product: string;
    client_id: string;
    remark: string;
    kit_number: string;
    assigned_client_id: string;
}> & {
    _id?: string | undefined;
    status: string;
    issuer: string;
    kit_type: string;
    product: string;
    client_id: string;
    remark: string;
    kit_number: string;
    assigned_client_id: string;
} & Required<{
    _id: string;
}>)[]>;
export { createKits, createBulkKits, getUnassignedKits, updateBulkKits };
