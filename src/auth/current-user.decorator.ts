import { createParamDecorator, ExecutionContext } from '@nestjs/common';

const getCurrentUserByContext = (ctx: ExecutionContext) => {
  return ctx.switchToHttp().getRequest().user;
};

export const CurrentUser = createParamDecorator((_, ctx: ExecutionContext) =>
  getCurrentUserByContext(ctx),
);
