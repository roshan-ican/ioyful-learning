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
import { updateProductDTO } from '@/domain/products/product.schema';
declare const updateExistingProduct: (_id: string, updateData: updateProductDTO) => Promise<import("mongoose").Document<unknown, {}, {
    created_at?: string | undefined;
    updated_at?: string | undefined;
    updated_by?: string | undefined;
    created_by?: string | undefined;
    description: string;
    _id: string;
    name: string;
    logo_url: string;
    isActive: boolean;
}> & {
    created_at?: string | undefined;
    updated_at?: string | undefined;
    updated_by?: string | undefined;
    created_by?: string | undefined;
    description: string;
    _id: string;
    name: string;
    logo_url: string;
    isActive: boolean;
} & Required<{
    _id: string;
}>>;
export default updateExistingProduct;
