import Router from '@koa/router';

import { authController } from '~/controllers';
import { authValidator } from '~/validators';

import { isAuthenticated } from './middlewares';

const router = new Router();

router
  /**
   * Auth
   */
  .get('/authenticate', authValidator.create, authController.create)
  .use(isAuthenticated);

export default router;
