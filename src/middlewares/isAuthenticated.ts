import { verify } from 'jsonwebtoken';
import { Context, Next } from 'koa';

import { authConfig } from '~/configs';
import { Unauthorized } from '~/errors';

interface TokenPayload {
  iat: number;
  exp: number;
  user: Record<string, string>;
}

export default async function isAuthenticated(
  ctx: Context,
  next: Next
): Promise<void> {
  if (!ctx.headers || !ctx.headers.authorization) {
    throw new Unauthorized('Token de autenticação não encontrado');
  }

  const token = ctx.headers.authorization.split(' ')[1];

  if (!token) throw new Unauthorized('Token de autenticação inválido');

  const decodedToken = verify(token, authConfig.secret) as TokenPayload;

  ctx.state.user = decodedToken.user;

  await next();
}
