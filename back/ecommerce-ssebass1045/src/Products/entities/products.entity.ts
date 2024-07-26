import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, ManyToMany, JoinTable, JoinColumn, OneToMany } from 'typeorm';
import { Categories } from 'src/categories/entities/categories.entity';
import { OrderDetails } from 'src/orderdetails/entities/orderdetails.entity';
import { v4 as uuid } from 'uuid'

@Entity({
  name: 'PRODUCTS',
})
export class Products {
  @PrimaryGeneratedColumn('uuid')
  id: string = uuid();

  @Column({ 
    type: 'varchar',
    length: 50,
    unique: true,
    nullable: false,
  })
  name: string;

  @Column({
    type: 'text',
    nullable: false,
  })
  description: string;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    nullable: false, 
  })
  price: number;

  @Column({
    type: 'int',
    nullable: false,
  })
  stock: number;

  @Column({ 
    type: 'text',
    nullable: false,
   })
  imgUrl: string;

  
  @ManyToMany(() => OrderDetails, (orderDetails) => orderDetails.products)
  orderDetails: OrderDetails[];
  
  @ManyToOne(() => Categories, (category) => category.products)
  @JoinColumn({ name: 'category_id' })
  category: Categories;
 

}






// export class Product {
// id:number

// name: string

// description: string

// price: number

// stock: boolean

// imgUrl: string
// }