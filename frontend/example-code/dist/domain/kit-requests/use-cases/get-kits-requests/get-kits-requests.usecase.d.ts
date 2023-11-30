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
declare const getKitsRequestsUseCase: () => Promise<(import("mongoose").Document<unknown, {}, {
    _id?: string | undefined;
    business_name?: string | undefined;
    program_manager?: string | undefined;
    card_type?: string | undefined;
    card_variant?: string | undefined;
    card_design?: string | undefined;
    status: string;
    issuer: string;
    request_count: number;
    kit_type: "PHYSICAL" | "VIRTUAL";
    product: string;
    client_id: string;
    remark: string;
}> & {
    _id?: string | undefined;
    business_name?: string | undefined;
    program_manager?: string | undefined;
    card_type?: string | undefined;
    card_variant?: string | undefined;
    card_design?: string | undefined;
    status: string;
    issuer: string;
    request_count: number;
    kit_type: "PHYSICAL" | "VIRTUAL";
    product: string;
    client_id: string;
    remark: string;
} & Required<{
    _id: string;
}>)[]>;
export default getKitsRequestsUseCase;
