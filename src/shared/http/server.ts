import cors from '@koa/cors';
import Koa from 'koa';
import body from 'koa-bodyparser';
import policy from 'koa-csp';
import helmet from 'koa-helmet';
import logger from 'koa-logger';
import mount from 'koa-mount';
import serve from 'koa-static';

const app = new Koa();

app.proxy = true;

app
  // .use(globalExceptionHandler)
  .use(logger())
  .use(helmet())
  .use(cors(/*corsConfig*/))
  .use(body({ jsonLimit: '2mb' }))
  .use(mount('/attachments', serve('./uploads')))
  //  .use(
  //    policy({
  //      enableWarn: true,
  //      policy: {
  //        defaultSrc: ['self', ...swaggerConfig.src],
  //      },
  //    })
  //  )
  // .use(swaggerConfig.middleware)
  // .use(router());


const server = app.listen(process.env.PORT || 3333, () => console.log('hello world!'));

export default server;
