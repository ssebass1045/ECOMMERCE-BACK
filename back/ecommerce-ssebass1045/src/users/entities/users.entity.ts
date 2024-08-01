import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from "typeorm";
import { Orders } from "src/orders/entities/orders.entity";
import { v4 as uuid } from 'uuid'


@Entity({
  name: 'USERS',
})
export class Users {
  @PrimaryGeneratedColumn('uuid')
  id: string = uuid();

  @Column({ 
    type: 'varchar',
    length: 50,
    nullable: false,
  })
  name: string;

  @Column({ 
    type: 'varchar',
    length: 50,
    nullable: false, 
    unique: true,
   })
  email: string;

  @Column({ 
    type: 'text',
    nullable: false,
  })
  password: string;

  @Column({ 
    type: 'bigint' 
  })
  phone: number;

  @Column({ 
    type: 'varchar',
    length: 50
  })
  country: string;

  @Column({ 
    type: 'text',
  })
  address: string;

  @Column({ 
    type: 'varchar',
    length: 50, 
  })
  city: string;

  @Column({
    type: 'boolean',
    default: false,
  })
  isAdmin: boolean;

  @OneToMany(() => Orders, (order) => order.user)
  @JoinColumn({ name: 'orders_id'})
  orders: Orders[];
}

