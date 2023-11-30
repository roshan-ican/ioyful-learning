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
import { QueryOptions } from '@/common/types';
import { createClientDTO, updateClientDTO, updateClientBankDTO, client } from '@/domain/client/client.schema';
declare const getAllClients: (queryOptions: QueryOptions & Partial<client>) => Promise<import("@/common/types").QueryResult<{
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
    stage: import("../common/enums").StageEnum;
    nkPoc: string;
}>>;
declare const getClientByIssuer: (queryOptions: QueryOptions & Partial<client>, issuer: any) => Promise<import("@/common/types").QueryResult<{
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
    stage: import("../common/enums").StageEnum;
    nkPoc: string;
}>>;
declare const getClient: (id: any) => Promise<(import("mongoose").Document<unknown, {}, {
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
    stage: import("../common/enums").StageEnum;
    nkPoc: string;
}> & {
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
    stage: import("../common/enums").StageEnum;
    nkPoc: string;
} & {
    _id: import("mongoose").Types.ObjectId;
}) | null>;
declare const getClientsByIssuers: (issuer: any) => Promise<Omit<import("mongoose").Document<unknown, {}, {
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
    stage: import("../common/enums").StageEnum;
    nkPoc: string;
}> & {
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
    stage: import("../common/enums").StageEnum;
    nkPoc: string;
} & {
    _id: import("mongoose").Types.ObjectId;
}, never>[]>;
declare const getClientByEmail: (email: string) => Promise<(import("mongoose").Document<unknown, {}, {
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
    stage: import("../common/enums").StageEnum;
    nkPoc: string;
}> & {
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
    stage: import("../common/enums").StageEnum;
    nkPoc: string;
} & {
    _id: import("mongoose").Types.ObjectId;
}) | null>;
declare const createClient: (newClient: createClientDTO) => Promise<import("mongoose").Document<unknown, {}, {
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
    stage: import("../common/enums").StageEnum;
    nkPoc: string;
}> & {
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
    stage: import("../common/enums").StageEnum;
    nkPoc: string;
} & {
    _id: import("mongoose").Types.ObjectId;
}>;
declare const updateClient: (id: string, updateClient: updateClientDTO) => Promise<import("mongoose").UpdateWriteOpResult>;
declare const updateBankbyId: (id: string, updatedBankDetails: updateClientBankDTO) => Promise<(import("mongoose").Document<unknown, {}, {
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
    stage: import("../common/enums").StageEnum;
    nkPoc: string;
}> & {
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
    stage: import("../common/enums").StageEnum;
    nkPoc: string;
} & {
    _id: import("mongoose").Types.ObjectId;
}) | null>;
export { getAllClients, getClient, createClient, updateClient, updateBankbyId, getClientByEmail, getClientByIssuer, getClientsByIssuers };
