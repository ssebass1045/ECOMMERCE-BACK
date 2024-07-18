import { Injectable } from "@nestjs/common";
import { Product } from "./entities/product.entity";



@Injectable()
export class ProductsRepository {
private products: Product[] = [
    {
        id:1,

        name: "prducto1",
        
        description: "description, product",
        
        price: 1800,
        
        stock: true,
        
        imgUrl: "https://images.ctfassets.net/4cd45et68cgf/4nBnsuPq03diC5eHXnQYx/d48a4664cdc48b6065b0be2d0c7bc388/Netflix-Logo.jpg"
        },

            {
            id:2,
    
            name: "prducto2",
            
            description: "description, product",
            
            price: 2000,
            
            stock: true,
            
            imgUrl: "https://static-assets.bamgrid.com/product/disneyplus/images/share-default.8bf3102623e935e7bc126df36b956b98.jpg"
            }
]
async getAllProducts(){
    return this.products;
}

}