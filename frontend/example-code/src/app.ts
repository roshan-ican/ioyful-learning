import { join } from 'path'
import AutoLoad, { AutoloadPluginOptions } from '@fastify/autoload'
import { FastifyPluginAsync } from 'fastify'
import 'module-alias/register'
import { connectDb } from '@/data-access/config/connect-to-db'

declare module 'fastify' {
  interface FastifyInstance {
    config: {
      DATABASE_URL: string,
      BASE_URL:string
    }
  }
}

export type AppOptions = {
  // Place your custom options for app below here.
} & Partial<AutoloadPluginOptions>

// Pass --options via CLI arguments in command to enable these options.
const options: AppOptions = {}

const app: FastifyPluginAsync<AppOptions> = async (
  fastify,
  opts
): Promise<void> => {
  // Place here your custom code!
  //   void fastify.setValidatorCompiler(TypeBoxValidatorCompiler)
  connectDb()
  // Do not touch the following lines

  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application
  void fastify.register(AutoLoad, {
    dir: join(__dirname, 'plugins'),
  })

  // This loads all plugins defined in routes
  // define your routes in one of these
  void fastify.register(AutoLoad, {
    dir: join(__dirname, './entry-points/http/'),
    options: Object.assign({ prefix: '/api/V2' }, opts)
  })

  fastify.ready(() => fastify.log.info(fastify.printRoutes()))
}

export default app
export { app, options }
