import { Context } from 'koa';
import * as Yup from 'yup';

import validateSchema from './validateSchema';

class AuthValidator {
  public async create(ctx: Context, next: () => Promise<void>): Promise<void> {
    const schema = Yup.object().shape({
      credential: Yup.string().required('Digite o seu nick/email'),
      password: Yup.string().required('Digite sua senha'),
    });

    await validateSchema(schema, ctx.request.body);

    await next();
  }
}

export default new AuthValidator();
