import Router from '@koa/router';
import { DefaultState, Context } from 'koa';

const router = new Router<DefaultState, Context>();

router.get('/');

export default router;
