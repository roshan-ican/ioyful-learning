import fp from 'fastify-plugin'
import fastifyEnv from '@fastify/env'
import { Type } from '@fastify/type-provider-typebox'

const schema = Type.Object({ DATABASE_URL: Type.String() })

export default fp(async (fastify) => {
  const options = {
    dotenv: true,
    schema: schema
  }

  await fastify.register(fastifyEnv, options)
})
