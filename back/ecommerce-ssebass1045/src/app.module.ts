import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './Products/Products.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
//import { LoggerDI } from './middlewares/loggerDi.middeleware';

@Module({
  imports: [ProductsModule, UsersModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
// implements NestModule {
//   configure(consumer: MiddlewareConsumer){
//     consumers.apply(LoggerDI).exclude("/otra").forRoutes("*");
//   }
// }
