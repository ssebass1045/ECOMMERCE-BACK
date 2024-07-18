import { Module } from "@nestjs/common";
import { ProductsController } from "./Products.controller";
import { ProductsService } from "./Products.service";
import { ProductsRepository } from "./Products.repository";

@Module({
    imports: [],
    controllers: [ProductsController],
    providers: [ProductsService, ProductsRepository],
})
export class ProductsModule {}