import { Static } from '@sinclair/typebox';
export declare const fixedSchema: import("@sinclair/typebox").TObject<{
    _id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    bank_share: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
}>;
export declare const slabSchema: import("@sinclair/typebox").TObject<{
    _id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    min_amount: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    max_amount: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    bank_share: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
}>;
export declare const cardNetworkSchema: import("@sinclair/typebox").TObject<{
    _id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    name: import("@sinclair/typebox").TString;
    card_Type: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
}>;
export declare const CardReloadibilitySchema: import("@sinclair/typebox").TObject<{
    _id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    name: import("@sinclair/typebox").TString;
    slab: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        _id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        min_amount: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        max_amount: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        bank_share: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    }>>>;
    fixed: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        _id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        bank_share: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    }>>;
}>;
export declare const issuersSchema: import("@sinclair/typebox").TObject<{
    _id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    name: import("@sinclair/typebox").TString;
    program_type: import("@sinclair/typebox").TString;
    logo_url: import("@sinclair/typebox").TString;
    card_networks: import("@sinclair/typebox").TObject<{
        _id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        name: import("@sinclair/typebox").TString;
        card_Type: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
    }>;
    status: import("@sinclair/typebox").TBoolean;
    card_reloadibility_type: import("@sinclair/typebox").TObject<{
        _id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        name: import("@sinclair/typebox").TString;
        slab: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            _id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            min_amount: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            max_amount: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            bank_share: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        }>>>;
        fixed: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            _id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            bank_share: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        }>>;
    }>;
    issuers_logo_path: import("@sinclair/typebox").TString;
}>;
export type Issuers = Static<typeof issuersSchema>;
export type Fixed = Static<typeof fixedSchema>;
export type Slab = Static<typeof slabSchema>;
export type CardNetwork = Static<typeof cardNetworkSchema>;
export type CardReloadibility = Static<typeof CardReloadibilitySchema>;
export declare const updateProductRequestSchema: import("@sinclair/typebox").TObject<{
    name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    program_type: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    logo_url: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    card_networks: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        _id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        name: import("@sinclair/typebox").TString;
        card_Type: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
    }>>;
    status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
    card_reloadibility_type: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        _id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        name: import("@sinclair/typebox").TString;
        slab: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            _id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            min_amount: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            max_amount: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            bank_share: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        }>>>;
        fixed: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            _id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            bank_share: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        }>>;
    }>>;
    issuers_logo_path: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
}>;
export type updateProductDTO = Static<typeof updateProductRequestSchema>;
export type createIssuersRequestDTO = Static<typeof issuersSchema>;
export declare const updateIssuersRequestSchema: import("@sinclair/typebox").TObject<{
    _id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>>;
    name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    program_type: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    logo_url: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    card_networks: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        _id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        name: import("@sinclair/typebox").TString;
        card_Type: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
    }>>;
    status: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TBoolean>;
    card_reloadibility_type: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        _id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        name: import("@sinclair/typebox").TString;
        slab: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            _id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            min_amount: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            max_amount: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            bank_share: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        }>>>;
        fixed: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            _id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            bank_share: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        }>>;
    }>>;
    issuers_logo_path: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
}>;
export type updateIssuersRequestDTO = Static<typeof updateIssuersRequestSchema>;
export declare const createIssuersResponseSchema: import("@sinclair/typebox").TObject<{
    _id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    name: import("@sinclair/typebox").TString;
    program_type: import("@sinclair/typebox").TString;
    logo_url: import("@sinclair/typebox").TString;
    card_networks: import("@sinclair/typebox").TObject<{
        _id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        name: import("@sinclair/typebox").TString;
        card_Type: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
    }>;
    status: import("@sinclair/typebox").TBoolean;
    card_reloadibility_type: import("@sinclair/typebox").TObject<{
        _id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        name: import("@sinclair/typebox").TString;
        slab: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            _id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            min_amount: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            max_amount: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            bank_share: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        }>>>;
        fixed: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            _id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            bank_share: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        }>>;
    }>;
    issuers_logo_path: import("@sinclair/typebox").TString;
}>;
export declare const readIssuersResponseSchema: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
    _id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    name: import("@sinclair/typebox").TString;
    program_type: import("@sinclair/typebox").TString;
    logo_url: import("@sinclair/typebox").TString;
    card_networks: import("@sinclair/typebox").TObject<{
        _id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        name: import("@sinclair/typebox").TString;
        card_Type: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
    }>;
    status: import("@sinclair/typebox").TBoolean;
    card_reloadibility_type: import("@sinclair/typebox").TObject<{
        _id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        name: import("@sinclair/typebox").TString;
        slab: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            _id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            min_amount: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            max_amount: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
            bank_share: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        }>>>;
        fixed: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
            _id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
            bank_share: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        }>>;
    }>;
    issuers_logo_path: import("@sinclair/typebox").TString;
}>>;
export type createFixedSchemaRequestDTO = Static<typeof fixedSchema>;
export declare const createFixedSchemaResponseSchema: import("@sinclair/typebox").TObject<{
    _id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    bank_share: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
}>;
export type createSlabSchemaRequestDTO = Static<typeof slabSchema>;
export declare const createSlabSchemaResponseSchema: import("@sinclair/typebox").TObject<{
    _id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    min_amount: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    max_amount: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    bank_share: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
}>;
export type createCardNetworkSchemaRequestDTO = Static<typeof cardNetworkSchema>;
export declare const createCardNetworkSchemaResponseSchema: import("@sinclair/typebox").TObject<{
    _id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    name: import("@sinclair/typebox").TString;
    card_Type: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
}>;
export declare const updateCardNetworksRequestSchema: import("@sinclair/typebox").TObject<{
    _id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>>;
    name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    card_Type: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>>;
}>;
export type updateCardNetworkSchemaRequestDTO = Static<typeof updateCardNetworksRequestSchema>;
export declare const updateCardReloadibilitySchema: import("@sinclair/typebox").TObject<{
    _id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>>;
    name: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    slab: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        _id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        min_amount: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        max_amount: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        bank_share: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    }>>>>;
    fixed: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        _id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        bank_share: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    }>>>;
}>;
export type updateCardReloadibilitySchemaRequestDTO = Static<typeof updateCardReloadibilitySchema>;
export type createCardReloadibilitySchemaRequestDTO = Static<typeof CardReloadibilitySchema>;
export declare const createCardReloadibilitySchemaResponseSchema: import("@sinclair/typebox").TObject<{
    _id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    name: import("@sinclair/typebox").TString;
    slab: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
        _id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        min_amount: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        max_amount: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
        bank_share: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    }>>>;
    fixed: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{
        _id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        bank_share: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TNumber>;
    }>>;
}>;
