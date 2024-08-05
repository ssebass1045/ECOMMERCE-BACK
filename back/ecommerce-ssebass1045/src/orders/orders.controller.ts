import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { AuthGuard } from 'src/auth/AuthGuard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';


@ApiTags('ORDERS')
@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}


  @ApiBearerAuth()
  @Post()
  @UseGuards(AuthGuard)
  create(@Body() order: CreateOrderDto) {
    const { userId, products } = order;
    return this.ordersService.create(userId, products);
  }

  @ApiBearerAuth()
  @Get(':id')
  @UseGuards(AuthGuard)
  findOne(@Query('id') id: string) {
    return this.ordersService.findOne(id);
  }


}
