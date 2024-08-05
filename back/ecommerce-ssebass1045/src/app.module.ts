import { Module, } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import ormconfig from './config/ormconfig';
import { TypeOrmModule } from '@nestjs/typeorm';

//import { LoggerDI } from './middlewares/loggerDi.middeleware';
import { OrdersModule } from './orders/orders.module';
import { CategoriesModule } from './categories/categories.module';
import { FilesModule } from './files/files.module';
import { JwtModule } from '@nestjs/jwt';


@Module({
  imports: [
    ConfigModule.forRoot(
    {
      isGlobal: true,
      load:[ormconfig]}
    ),
    TypeOrmModule.forRootAsync({
      inject:[ConfigService],
      useFactory: (config: ConfigService) => config.get('typeorm')
    }),
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: {expiresIn: '1h'}
    }),
    ProductsModule,
    UsersModule,
    AuthModule,
    OrdersModule,
    CategoriesModule,
    FilesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
