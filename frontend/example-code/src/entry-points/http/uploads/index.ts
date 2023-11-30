import { uploadHandler } from '@/domain/upload/upload.usecase'
import {
  TypeBoxTypeProvider,
  FastifyPluginAsyncTypebox
} from '@fastify/type-provider-typebox'

const product: FastifyPluginAsyncTypebox = async (
  fastify,
  opts
): Promise<void> => {
  fastify.withTypeProvider<TypeBoxTypeProvider>().post(
    '/',
    // { schema:  },
    async function (request, reply) {
      const file = await request.file();
      // const fileBuffer = await file.toBuffer();
      // console.log(fileBuffer, '<<<<<< fileBuffer')
      // console.log(`Received file with ${fileBuffer.length} bytes.`);

       const data = await uploadHandler(file);  
       console.log(data, '<<<<< data')
       reply.status(201).send({...data})
    }
  )
}

export default product
