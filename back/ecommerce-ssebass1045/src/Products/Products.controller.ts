import { Controller, Body, Delete, Get, Param, Query, HttpCode, Post, Put, UseGuards } from "@nestjs/common";
import { ProductsService } from "./products.service";
import { CreateProductDto } from "./dto/cretae-product.dto";
import { AuthGuard } from "src/auth/AuthGuard";

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) {}

    
    @Get()
    getAllProducts(@Query('page') page: number, @Query('Limit') Limit: number){
      if (page && Limit){
        return this.productsService.getAllProducts(page, Limit);
      }
      return this.productsService.getAllProducts(1,2);
    }

    @Get('seeder')
    addProducts(){
      return this.productsService.create();
    }    

    @Get(':id')
    getProduct(@Param('id') id: string) {
      return this.productsService.findOne(id);
    }
    
    @Put(":id")
    @UseGuards(AuthGuard)
    updateProduct(@Query('id') id: string, @Body() product:any ){
      return this.productsService.update(id, product);
    }
  

  //   @Post()
  //   @UseGuards(AuthGuard)
  //   @HttpCode(201)
  //   create(@Body() createProduct: CreateProductDto){
  //       return this.productsService.create(createProduct);
  //   }
  //   update(@Body() UpdateProduct, @Param("id") id: string) {
  //     return this.productsService.update(UpdateProduct, id);
  //   }
    
    

  // @Delete(':id')
  // @UseGuards(AuthGuard)
  // remove(@Param('id') id: string) {
  //   return this.productsService.remove(+id);
  // }

}