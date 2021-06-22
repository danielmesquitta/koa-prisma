import cors from '@koa/cors';
import Koa from 'koa';
import body from 'koa-bodyparser';
import policy from 'koa-csp';
import helmet from 'koa-helmet';
import logger from 'koa-logger';
import mount from 'koa-mount';
import serve from 'koa-static';

import { corsConfig } from '~/configs';
import { globalExceptionHandler } from '~/middlewares';
import router from '~/routes';

const app = new Koa();

app
  .use(globalExceptionHandler)
  .use(logger())
  .use(helmet())
  .use(cors(corsConfig))
  .use(policy())
  .use(body({ jsonLimit: '2mb' }))
  .use(mount('/files', serve('./uploads')))
  .use(router.routes());

const server = app.listen(process.env.PORT || 3333);

export default server;
