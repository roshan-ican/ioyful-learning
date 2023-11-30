import { createExampleDTO } from '@/domain/example/example.schema';
declare const getExamples: () => Promise<void>;
declare const getExample: (id: string) => Promise<void>;
declare const createExample: (newExample: createExampleDTO) => Promise<import("mongoose").Document<unknown, {}, {
    _id: string;
    first_name: string;
    last_name: string;
    designation: string;
    employee_code: string;
    email: string;
}> & {
    _id: string;
    first_name: string;
    last_name: string;
    designation: string;
    employee_code: string;
    email: string;
} & Required<{
    _id: string;
}>>;
export { getExample, getExamples, createExample };
