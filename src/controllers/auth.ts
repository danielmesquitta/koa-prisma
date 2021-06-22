import { Context } from 'koa';

import { authenticate } from '~/services';

class AuthController {
  public async create(ctx: Context): Promise<void> {
    const { credential, password } = ctx.request.body as Record<string, any>;

    const { user, token } = await authenticate.execute({
      credential,
      password,
    });

    ctx.body = {
      user,
      token,
    };
  }
}

export default new AuthController();
