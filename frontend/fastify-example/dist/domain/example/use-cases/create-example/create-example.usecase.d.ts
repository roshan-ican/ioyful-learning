import { createExampleDTO } from '@/domain/example/example.schema';
declare const createExampleUseCase: (newExample: createExampleDTO) => Promise<import("mongoose").Document<unknown, {}, {
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
export default createExampleUseCase;
