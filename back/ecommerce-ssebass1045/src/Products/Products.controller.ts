import { Controller, Get } from "@nestjs/common";
import { ProductsService } from "./Products.service";

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) {}

    @Get()
    getAllProducts(){
        return this.productsService.getAllProducts();
    }
}