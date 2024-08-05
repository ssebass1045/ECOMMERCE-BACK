import { DocumentBuilder } from '@nestjs/swagger';

export const swaggerConfig = new DocumentBuilder()
  .setTitle('PI Ecommerce-ssebass1045')
  .setDescription('This is Henry final M4 project. Ecommerce, implemented with nestjs')
  .setVersion("1.0.0")
  .addBearerAuth()
  .build();