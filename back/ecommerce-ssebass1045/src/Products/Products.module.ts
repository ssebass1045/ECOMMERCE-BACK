import { Module } from "@nestjs/common";
import { ProductsController } from "./Products.controller";
import { ProductsService } from "./Products.service";

@Module({
    imports: [],
    controllers: [ProductsController],
    providers: [ProductsService],
})
export class ProductsModule {}