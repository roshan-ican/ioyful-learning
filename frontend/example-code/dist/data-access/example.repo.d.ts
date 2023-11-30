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
import { createExampleDTO } from '@/domain/example/example.schema';
declare const getExamples: () => Promise<void>;
declare const getExample: (id: string) => Promise<void>;
declare const createExample: (newExample: createExampleDTO) => Promise<import("mongoose").Document<unknown, {}, {
    _id: string;
    email: string;
    first_name: string;
    last_name: string;
    designation: string;
    employee_code: string;
}> & {
    _id: string;
    email: string;
    first_name: string;
    last_name: string;
    designation: string;
    employee_code: string;
} & Required<{
    _id: string;
}>>;
export { getExample, getExamples, createExample };
