import { Controller, Body, Delete, Get, Param, Query, HttpCode, Post, Put, UseGuards } from "@nestjs/common";
import { ProductsService } from "./products.service";
import { CreateProductDto } from "./dto/cretae-product.dto";
import { AuthGuard } from "src/auth/AuthGuard";
import { RolesGuard } from "src/auth/roles.guard";
import { Roles } from "src/decorators/roles.decorator";
import { Role } from "src/roles.enum";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";


@ApiTags('PRODUCTS')
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
    

    @ApiBearerAuth()
    @Put(":id")
    @Roles(Role.Admin)
    @UseGuards(AuthGuard, RolesGuard)
    updateProduct(@Query('id') id: string, @Body() product:any ){
      return this.productsService.update(id, product);
    }
  
}