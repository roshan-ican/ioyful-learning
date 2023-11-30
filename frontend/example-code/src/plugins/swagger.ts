import fp from 'fastify-plugin'
import swagger from '@fastify/swagger'
import swaggerUi from '@fastify/swagger-ui'
import { clientSchema } from '@/domain/client/client.schema'
import { productsSchema } from '@/domain/products/product.schema'
import { prefundsSchema } from '@/domain/prefunds/prefunds.schema'

export default fp(async (fastify) => {
  fastify.register(swagger, {
    openapi: {
      components: {
        schemas: {
          Client: clientSchema,
          Product: productsSchema,
          Prefunds: prefundsSchema
        }
      },
      info: {
        title: 'PPI Admin Backend API',
        description: '',
        version: '0.1.0'
      },
      servers: [
        {
          url: `${process.env.BASE_URL}`
        }
      ]
    },
    hideUntagged: false
  })
  fastify.register(swaggerUi)
})
