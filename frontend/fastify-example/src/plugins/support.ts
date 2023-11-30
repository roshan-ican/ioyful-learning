import fp from 'fastify-plugin'

export interface SupportPluginOptions {
  // Specify Support plugin options here
}

// The use of fastify-plugin is required to be able
// to export the decorators to the outer scope
export default fp<SupportPluginOptions>(async (fastify, opts) => {
  fastify.decorate('someSupport', function () {
    return 'hugs'
  })
})

// When using .decorate you have to specify added properties for Typescript
declare module 'fastify' {
  export interface FastifyInstance {
    someSupport(): string
    config: {
      MONGO_CONNECTION_STRING: string
      // this should be same as the confKey in options
      // specify your typing here
    }
  }
}
