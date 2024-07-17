import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { LoggerFunct } from './middlewares/loggerFunct.middeleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(LoggerFunct);
  await app.listen(3000);
}
bootstrap();
