import { Static } from '@sinclair/typebox';
export declare const kitsUploadLedgerSchema: import("@sinclair/typebox").TObject<{
    _id: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    storageLink: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    createdAt: import("@sinclair/typebox").TDate;
    modifiedBy: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    modifiedAt: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TDate>;
    remark: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    status: import("@sinclair/typebox").TString;
}>;
export type KitsUploadLedger = Static<typeof kitsUploadLedgerSchema>;
