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
import { TransactionStatus, createPrefundDTO } from '@/domain/prefunds/prefunds.schema';
declare const createNewPrefund: (newPrefund: createPrefundDTO) => Promise<import("mongoose").Document<unknown, {}, {
    status?: TransactionStatus | undefined;
    created_at?: string | undefined;
    updated_at?: string | undefined;
    updated_by?: string | undefined;
    created_by?: string | undefined;
    transaction_id?: string | undefined;
    _id: string;
    client_id: {
        _id?: any;
        name?: string | undefined;
        clientHashId?: string | undefined;
        created_at?: string | undefined;
        updated_at?: string | undefined;
        buissness_name?: string | undefined;
        product_type?: string[] | undefined;
        client_type?: string[] | undefined;
        card_network?: string | undefined;
        mobile_number?: string | undefined;
        email?: string | undefined;
        issuer?: {
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
        }[] | undefined;
        stage?: import("../../../../common/enums").StageEnum | undefined;
        isActive?: boolean | undefined;
        nkPoc?: string | undefined;
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
    };
    remark: string;
    transaction_type: import("@/domain/prefunds/prefunds.schema").TransactionType;
    prefund_type: import("@/domain/prefunds/prefunds.schema").PrefundType;
    amount: string;
    bank_account_id: string;
}> & {
    status?: TransactionStatus | undefined;
    created_at?: string | undefined;
    updated_at?: string | undefined;
    updated_by?: string | undefined;
    created_by?: string | undefined;
    transaction_id?: string | undefined;
    _id: string;
    client_id: {
        _id?: any;
        name?: string | undefined;
        clientHashId?: string | undefined;
        created_at?: string | undefined;
        updated_at?: string | undefined;
        buissness_name?: string | undefined;
        product_type?: string[] | undefined;
        client_type?: string[] | undefined;
        card_network?: string | undefined;
        mobile_number?: string | undefined;
        email?: string | undefined;
        issuer?: {
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
        }[] | undefined;
        stage?: import("../../../../common/enums").StageEnum | undefined;
        isActive?: boolean | undefined;
        nkPoc?: string | undefined;
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
    };
    remark: string;
    transaction_type: import("@/domain/prefunds/prefunds.schema").TransactionType;
    prefund_type: import("@/domain/prefunds/prefunds.schema").PrefundType;
    amount: string;
    bank_account_id: string;
} & Required<{
    _id: string;
}>>;
export default createNewPrefund;
