import { Context, Next } from 'koa';

const globalExceptionHandler = async (
  ctx: Context,
  next: Next
): Promise<void> => {
  try {
    await next();
  } catch (err) {
    ctx.status = Number(err.status || err.statusCode || 500);

    ctx.body = {
      message: ctx.status === 500 ? 'Erro interno no servidor' : err.message,
      status: ctx.status,
    };

    ctx.app.emit('error', err, ctx);
  }
};

export default globalExceptionHandler;
