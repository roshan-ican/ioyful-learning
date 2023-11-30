export interface IUploadHandlerParams {
    field: string;
    file: any;
    filename: string;
    encoding: string;
    mimetype: string;
}
export declare function uploadHandler(fileData: any): Promise<{
    filename: string;
    presignedURL: string;
} | void>;
