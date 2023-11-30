import { QueryOptions } from '@/common/types';
import { client } from '@/domain/client/client.schema';
declare const getClientByIssuerId: (queryOptions: QueryOptions & Partial<client>, issuerName: string) => Promise<import("@/common/types").QueryResult<{
    _id?: any;
    clientHashId?: string | undefined;
    created_at?: string | undefined;
    updated_at?: string | undefined;
    isActive?: boolean | undefined;
    client_bank?: {
        _id?: any;
        name?: string | undefined;
        account_number?: string | undefined;
        ifsc?: string | undefined;
        clientHashId?: string | undefined;
        created_at?: string | undefined;
        updated_at?: string | undefined;
        updated_by?: string | undefined;
        created_by?: string | undefined;
    } | undefined;
    client_deposit_bank?: {
        _id?: any;
        name?: string | undefined;
        account_number?: string | undefined;
        ifsc?: string | undefined;
        clientHashId?: string | undefined;
        created_at?: string | undefined;
        updated_at?: string | undefined;
        updated_by?: string | undefined;
        created_by?: string | undefined;
    } | undefined;
    client_wallet?: {
        _id?: any;
        clientHashId?: string | undefined;
        created_at?: string | undefined;
        updated_at?: string | undefined;
        updated_by?: string | undefined;
        created_by?: string | undefined;
        total_credits?: string | undefined;
        total_debits?: string | undefined;
    } | undefined;
    name: string;
    buissness_name: string;
    product_type: string[];
    client_type: string[];
    card_network: string;
    mobile_number: string;
    email: string;
    issuer: {
        _id?: string | undefined;
        name?: string | undefined;
        program_type?: string | undefined;
        logo_url?: string | undefined;
        card_networks?: {
            _id?: string | undefined;
            name: string;
            card_Type: string[];
        } | undefined;
        status?: boolean | undefined;
        card_reloadibility_type?: {
            _id?: string | undefined;
            slab?: {
                _id?: string | undefined;
                bank_share?: number | undefined;
                min_amount?: number | undefined;
                max_amount?: number | undefined;
            }[] | undefined;
            fixed?: {
                _id?: string | undefined;
                bank_share?: number | undefined;
            } | undefined;
            name: string;
        } | undefined;
        issuers_logo_path?: string | undefined;
    }[];
    stage: import("../../../../common/enums").StageEnum;
    nkPoc: string;
}>>;
export default getClientByIssuerId;
