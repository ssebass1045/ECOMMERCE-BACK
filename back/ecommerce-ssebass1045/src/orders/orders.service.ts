import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Orders } from './entities/orders.entity';
import { OrderDetails } from 'src/orderdetails/entities/orderdetails.entity';
import { Users } from 'src/users/entities/users.entity';
import { Products } from 'src/products/entities/products.entity';



@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Orders) private _ordersRepository : Repository<Orders>,
    @InjectRepository(OrderDetails) private _orderDetailsRepository : Repository<OrderDetails>,
    @InjectRepository(Users) private _usersRepository: Repository<Users>,
    @InjectRepository(Products) private _productsRepository: Repository<Products>,
  ){}


  async create(userId: string, products: any) {
   let total = 0  
   const user = await this._usersRepository.findOneBy({ id: userId });

   if (!user) {
    return 'user not found';
   }
   const order = new Orders();
   order.date = new Date();
   order.user = user;

   const newOrder = await this._ordersRepository.save(order);

   const productsArray = await Promise.all(
    products.map(async (element) => {
      const product = await this._productsRepository.findOneBy({
        id: element.id,
      });
      if (!product){
        return 'product not found';
      }
      total += Number(product.price);

      await this._productsRepository.update(
        { id: element.id },
        { stock: product.stock - 1 },
      );

      console.log(product.price);
      console.log();
      return product;
    }),
   );
   const orderDetail = new OrderDetails();

   orderDetail.price = Number(Number(total).toFixed(2));
   orderDetail.products = productsArray;
   orderDetail.order = newOrder;

   await this._orderDetailsRepository.save(orderDetail);

   return await this._orderDetailsRepository.find({
    where: {order: { id: newOrder.id }},
    relations: ['order', 'products'],
   });
  }


  findOne(id: string) {
    const order = this._orderDetailsRepository.findOne({
      where: { id },
      relations: ['order', 'products'],
    });

    if (!order) {
      return 'Order not found';
    }
    return order;
  }


}
