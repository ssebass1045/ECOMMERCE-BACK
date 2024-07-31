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
import { OrderDetailsModule } from './orderdetails/orderdetails.module';
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
    OrderDetailsModule,
    CategoriesModule,
    FilesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}










// import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
// import { ProductsModule } from './Products/Products.module';
// import { UsersModule } from './users/users.module';
// import { AuthModule } from './auth/auth.module';
// import { typeOrmConfig } from './config/ormconfig';
// //import { LoggerDI } from './middlewares/loggerDi.middeleware';
// import { OrdersModule } from './orders/orders.module';
// import { OrderDetailsModule } from './order-details/order-details.module';
// import { CategoriesModule } from './categories/categories.module';
// import { ConfigModule } from '@nestjs/config';


// @Module({
//   imports: [
//     ProductsModule,
//     UsersModule,
//     AuthModule,
//     OrdersModule,
//     OrderDetailsModule,
//     CategoriesModule,
//     ConfigModule.forRoot({
//       isGlobal: true,
//     }),
//     TypeOrmModule.forRootAsync({
//       useFactory: () => typeOrmConfig,
//     }),
//   ],
//   controllers: [AppController],
//   providers: [AppService],
// })
// export class AppModule {}
// // implements NestModule {
// //   configure(consumer: MiddlewareConsumer){
// //     consumers.apply(LoggerDI).exclude("/otra").forRoutes("*");
// //   }
// // }
