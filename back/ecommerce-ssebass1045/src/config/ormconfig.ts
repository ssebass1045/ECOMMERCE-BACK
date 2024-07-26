
import { registerAs } from "@nestjs/config";
import { config as dotenvConfig } from 'dotenv';
import { DataSource, DataSourceOptions } from 'typeorm';


dotenvConfig({ path: '.env' });

const config = {
  type: 'postgres',
  host: `${process.env.DB_HOST}` || 'postgresdb',
  port: `${process.env.DB_PORT}`,
  username: `${process.env.DB_USER}`,
  password: `${process.env.DB_PASSWORD}`,
  database: `${process.env.DB_NAME}`,
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: ['dist/migrations/*{.ts,.js}'],
  autoLoadEntities: true,
  synchronize: true,  // Solo para desarrollo, no usar en producción
  dropSchema: true, //
  //logging: true,
};

export default registerAs('typeorm', () => config); // legible para ConfigModule
export const connectionSource = new DataSource(config as DataSourceOptions); // para las migraciones















// import { TypeOrmModuleOptions } from '@nestjs/typeorm';
// import * as dotenv from 'dotenv';
// import { Category } from 'src/categories/entities/category.entity';
// import { OrderDetail } from 'src/order-details/entities/order-detail.entity';
// import { Order } from 'src/orders/entities/order.entity';
// import { Product } from 'src/Products/entities/product.entity';
// import { User } from 'src/users/entities/user.entity';

// dotenv.config();

// export const typeOrmConfig: TypeOrmModuleOptions = {
//   type: 'postgres',
//   host: process.env.DATABASE_HOST,
//   port: parseInt(process.env.DATABASE_PORT, 10),
//   username: process.env.DATABASE_USERNAME,
//   password: process.env.DATABASE_PASSWORD,
//   database: process.env.DATABASE_NAME,
//   entities: [User, Product, Order, OrderDetail, Category],
//   synchronize: true,  // Solo para desarrollo, no usar en producción
//   dropSchema: true, //
//   logging: true,
// };


