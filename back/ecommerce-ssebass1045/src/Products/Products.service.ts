import { Injectable } from "@nestjs/common";
import { ProductsRepository } from "./Products.repository";

@Injectable()
export class ProductsService {
    constructor(private readonly _ProducrRepository: ProductsRepository){}
    getAllProducts(){
        return this._ProducrRepository.getAllProducts();
    }
}