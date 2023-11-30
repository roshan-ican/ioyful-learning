import { QueryOptions } from "@/common/types";
import { Product } from "../../product.schema";
declare const getProduct: (queryOptions: QueryOptions & Partial<Product>) => Promise<import("@/common/types").QueryResult<{
    created_at?: string | undefined;
    updated_at?: string | undefined;
    updated_by?: string | undefined;
    created_by?: string | undefined;
    description: string;
    _id: string;
    name: string;
    logo_url: string;
    isActive: boolean;
}>>;
export default getProduct;
