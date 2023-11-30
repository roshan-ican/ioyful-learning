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
import { createIssuersRequestDTO } from '@/domain/issuers/issuers.schema';
import { updateIssuersRequestDTO } from '@/domain/issuers/issuers.schema';
declare const createIssuers: (issuers: createIssuersRequestDTO) => Promise<import("mongoose").Document<unknown, {}, {
    _id?: string | undefined;
    name: string;
    program_type: string;
    logo_url: string;
    card_networks: {
        _id?: string | undefined;
        name: string;
        card_Type: string[];
    };
    status: boolean;
    card_reloadibility_type: {
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
    };
    issuers_logo_path: string;
}> & {
    _id?: string | undefined;
    name: string;
    program_type: string;
    logo_url: string;
    card_networks: {
        _id?: string | undefined;
        name: string;
        card_Type: string[];
    };
    status: boolean;
    card_reloadibility_type: {
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
    };
    issuers_logo_path: string;
} & Required<{
    _id: string;
}>>;
declare const updateIssuers: (id: any, issuers: updateIssuersRequestDTO) => Promise<import("mongoose").UpdateWriteOpResult>;
declare const getAllIssuers: () => import("mongoose").Query<Omit<import("mongoose").Document<unknown, {}, {
    _id?: string | undefined;
    name: string;
    program_type: string;
    logo_url: string;
    card_networks: {
        _id?: string | undefined;
        name: string;
        card_Type: string[];
    };
    status: boolean;
    card_reloadibility_type: {
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
    };
    issuers_logo_path: string;
}> & {
    _id?: string | undefined;
    name: string;
    program_type: string;
    logo_url: string;
    card_networks: {
        _id?: string | undefined;
        name: string;
        card_Type: string[];
    };
    status: boolean;
    card_reloadibility_type: {
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
    };
    issuers_logo_path: string;
} & Required<{
    _id: string;
}>, never>[], import("mongoose").Document<unknown, {}, {
    _id?: string | undefined;
    name: string;
    program_type: string;
    logo_url: string;
    card_networks: {
        _id?: string | undefined;
        name: string;
        card_Type: string[];
    };
    status: boolean;
    card_reloadibility_type: {
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
    };
    issuers_logo_path: string;
}> & {
    _id?: string | undefined;
    name: string;
    program_type: string;
    logo_url: string;
    card_networks: {
        _id?: string | undefined;
        name: string;
        card_Type: string[];
    };
    status: boolean;
    card_reloadibility_type: {
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
    };
    issuers_logo_path: string;
} & Required<{
    _id: string;
}>, {}, {
    _id?: string | undefined;
    name: string;
    program_type: string;
    logo_url: string;
    card_networks: {
        _id?: string | undefined;
        name: string;
        card_Type: string[];
    };
    status: boolean;
    card_reloadibility_type: {
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
    };
    issuers_logo_path: string;
}, "find">;
declare const getIssuer: (id: any) => Promise<(import("mongoose").Document<unknown, {}, {
    _id?: string | undefined;
    name: string;
    program_type: string;
    logo_url: string;
    card_networks: {
        _id?: string | undefined;
        name: string;
        card_Type: string[];
    };
    status: boolean;
    card_reloadibility_type: {
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
    };
    issuers_logo_path: string;
}> & {
    _id?: string | undefined;
    name: string;
    program_type: string;
    logo_url: string;
    card_networks: {
        _id?: string | undefined;
        name: string;
        card_Type: string[];
    };
    status: boolean;
    card_reloadibility_type: {
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
    };
    issuers_logo_path: string;
} & Required<{
    _id: string;
}>) | null>;
declare const getIssuerByName: (name: any) => Promise<(import("mongoose").Document<unknown, {}, {
    _id?: string | undefined;
    name: string;
    program_type: string;
    logo_url: string;
    card_networks: {
        _id?: string | undefined;
        name: string;
        card_Type: string[];
    };
    status: boolean;
    card_reloadibility_type: {
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
    };
    issuers_logo_path: string;
}> & {
    _id?: string | undefined;
    name: string;
    program_type: string;
    logo_url: string;
    card_networks: {
        _id?: string | undefined;
        name: string;
        card_Type: string[];
    };
    status: boolean;
    card_reloadibility_type: {
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
    };
    issuers_logo_path: string;
} & Required<{
    _id: string;
}>) | null>;
export { createIssuers, getAllIssuers, updateIssuers, getIssuer, getIssuerByName };
