import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from './shared/validation.pipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await app.listen(4000);
}

bootstrap();
