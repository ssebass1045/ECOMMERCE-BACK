import { Module } from "@nestjs/common";
import { ProductsController } from "./products.controller";
import { ProductsService } from "./products.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Products } from "./entities/products.entity";
import { Categories } from "src/categories/entities/categories.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Products, Categories])],
    controllers: [ProductsController],
    providers: [ProductsService],
})
export class ProductsModule {}