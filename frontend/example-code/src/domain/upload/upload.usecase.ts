import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3'
import { v4 as uuidv4 } from 'uuid';

const BUCKET_NAME = 'nkppi'
const REGION = 'ap-south-1'

export interface IUploadHandlerParams {
  field: string
  file: any
  filename: string
  encoding: string
  mimetype: string
}

const s3Client = new S3Client({
  region: REGION,
  credentials: {
    accessKeyId: 'AKIAQET5NBIPPIS3O7VN',
    secretAccessKey: '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'
  }
})

export async function uploadHandler(fileData: any):Promise<{filename:string,presignedURL:string} | void> {
  const { filename } = fileData
  const fileBuffer = await fileData.toBuffer()
  const uniqueFilename = uuidv4() + '-' + filename;

  const uploadParams = {
    Bucket: BUCKET_NAME,
    Key: filename,
    Body: fileBuffer,
    ContentType: fileData.mimetype
  }

  const command = new PutObjectCommand(uploadParams)

   return s3Client
    .send(command)
    .then(() => {
      const URL = `https://${BUCKET_NAME}.s3.${REGION}.amazonaws.com/${uniqueFilename}`
      return {
        filename: uniqueFilename,
        presignedURL: URL
      }
    })
    .catch((error) => {
      console.error(`Error uploading ${uniqueFilename}:`, error)
    })
}
