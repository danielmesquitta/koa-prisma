import { Options } from '@koa/cors';
import { Context } from 'koa';

const whitelist: string[] = JSON.parse(process.env.CORS_WHITELIST || '[]');

const corsConfig: Options = {
  origin: (ctx: Context) => {
    const reqOrigin = ctx.headers.origin;

    if (whitelist.length && !whitelist.includes(reqOrigin)) {
      return ctx.throw(`${reqOrigin} is not a valid origin`);
    }

    return reqOrigin;
  },
};

export default corsConfig;
