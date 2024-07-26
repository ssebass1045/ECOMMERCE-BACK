import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Orders } from './entities/orders.entity';
import { OrderDetails } from 'src/orderdetails/entities/orderdetails.entity';
import { Users } from 'src/users/entities/users.entity';
import { Products } from 'src/products/entities/products.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([OrderDetails]),
    TypeOrmModule.forFeature([Orders]),
    TypeOrmModule.forFeature([Users]),
    TypeOrmModule.forFeature([Products]),
  
  ],
  providers: [OrdersService],
  controllers: [OrdersController],
})
export class OrdersModule {}
