import { AutoloadPluginOptions } from '@fastify/autoload';
import { FastifyPluginAsync } from 'fastify';
import 'module-alias/register';
declare module 'fastify' {
    interface FastifyInstance {
        config: {
            DATABASE_URL: string;
            BASE_URL: string;
        };
    }
}
export type AppOptions = {} & Partial<AutoloadPluginOptions>;
declare const options: AppOptions;
declare const app: FastifyPluginAsync<AppOptions>;
export default app;
export { app, options };
