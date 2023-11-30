"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadHandler = void 0;
const client_s3_1 = require("@aws-sdk/client-s3");
const uuid_1 = require("uuid");
const BUCKET_NAME = 'nkppi';
const REGION = 'ap-south-1';
const s3Client = new client_s3_1.S3Client({
    region: REGION,
    credentials: {
        accessKeyId: 'AKIAQET5NBIPPIS3O7VN',
        secretAccessKey: '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'
    }
});
async function uploadHandler(fileData) {
    const { filename } = fileData;
    const fileBuffer = await fileData.toBuffer();
    const uniqueFilename = (0, uuid_1.v4)() + '-' + filename;
    const uploadParams = {
        Bucket: BUCKET_NAME,
        Key: filename,
        Body: fileBuffer,
        ContentType: fileData.mimetype
    };
    const command = new client_s3_1.PutObjectCommand(uploadParams);
    return s3Client
        .send(command)
        .then(() => {
        const URL = `https://${BUCKET_NAME}.s3.${REGION}.amazonaws.com/${uniqueFilename}`;
        return {
            filename: uniqueFilename,
            presignedURL: URL
        };
    })
        .catch((error) => {
        console.error(`Error uploading ${uniqueFilename}:`, error);
    });
}
exports.uploadHandler = uploadHandler;
//# sourceMappingURL=upload.usecase.js.map