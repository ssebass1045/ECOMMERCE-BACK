import { Module } from '@nestjs/common';
import { OrderDetailsService } from './orderdetails.service';
import { OrderDetailsController } from './orderdetails.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderDetails } from './entities/orderdetails.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OrderDetails])],
  controllers: [OrderDetailsController],
  providers: [OrderDetailsService],
})
export class OrderDetailsModule {}
