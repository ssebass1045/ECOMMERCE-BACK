import { Controller, Body, Delete, Get, Param, HttpCode, Post, Put, UseGuards } from "@nestjs/common";
import { ProductsService } from "./Products.service";
import { CreateProductDto } from "./dto/cretae-product.dto";
import { AuthGuard } from "src/auth/AuthGuard";

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) {}

    @Post()
    @UseGuards(AuthGuard)
    @HttpCode(201)
    create(@Body() createProduct: CreateProductDto){
        return this.productsService.create(createProduct);
    }

    @Get()
    getAllProducts(){
        return this.productsService.getAllProducts();
    }

    @Put(":id")
  @UseGuards(AuthGuard)
  update(@Body() UpdateProduct, @Param("id") id: string) {
    return this.productsService.update(UpdateProduct, id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(+id);
  }


  @Delete(':id')
  @UseGuards(AuthGuard)
  remove(@Param('id') id: string) {
    return this.productsService.remove(+id);
  }

}