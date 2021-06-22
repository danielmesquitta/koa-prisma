import { sign } from 'jsonwebtoken';

import { authConfig } from '~/configs';
import prisma from '~/database';
import { Unauthorized } from '~/errors';
import { hashProvider } from '~/providers';

interface Request {
  credential: string;
  password: string;
}

interface Response {
  user: any;
  token: string;
}

class Authenticate {
  public async execute({ credential, password }: Request): Promise<Response> {
    credential = credential.toLowerCase();

    const user = await prisma.user.findFirst({
      where: { OR: [{ email: credential }, { nick: credential }] },
    });

    if (!user) {
      throw new Unauthorized('E-mail/senha incorreto(s)');
    }

    if (!user.isVerified) {
      throw new Unauthorized('Seu e-mail ainda não foi verificado');
    }

    const passwordMatched = await hashProvider.compareHash(
      password,
      user.password
    );

    if (!passwordMatched) {
      throw new Unauthorized('E-mail/senha incorreto(s)');
    }

    const payload = { user };

    const { secret, expiresIn } = authConfig;

    const token = sign(payload, secret, {
      subject: user.id,
      expiresIn,
    });

    return {
      user,
      token,
    };
  }
}

export default new Authenticate();
