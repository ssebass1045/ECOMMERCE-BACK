import { Injectable } from "@nestjs/common";
import { CreateProductDto } from "./dto/cretae-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { ProductsRepository } from "./Products.repository";

@Injectable()
export class ProductsService {
    constructor(private readonly _ProductRepository: ProductsRepository){}
    
    create(createProduct: CreateProductDto){
        return this._ProductRepository.create(createProduct);
    }
    
    getAllProducts(){
        return this._ProductRepository.getAllProducts();
    }

    update(UpdateProduct: UpdateProductDto, id: string){
        return this._ProductRepository.update(UpdateProduct, id);
      }

      findOne(id: number) {
        return this._ProductRepository.findOne(id);
      }

      remove(id: number) {
        return this._ProductRepository.remove(id);
      }
}