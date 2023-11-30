declare const commonFieldsSchema: {
    created_by: {
        type: StringConstructor;
        default: string;
    };
    updated_by: {
        type: StringConstructor;
        default: string;
    };
    created_at: {
        type: DateConstructor;
        default: () => number;
    };
    updated_at: {
        type: DateConstructor;
        default: () => number;
    };
};
export default commonFieldsSchema;
