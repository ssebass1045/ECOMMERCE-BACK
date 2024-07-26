

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { LoggerFunct } from './middlewares/loggerFunct.middeleware';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(LoggerFunct);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
