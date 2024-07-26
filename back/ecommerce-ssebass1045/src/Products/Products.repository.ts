import { Injectable } from "@nestjs/common";
//import { Product } from "./entities/product.entity";



@Injectable()
export class ProductsRepository {
private products
//: Product[] 
// = [
//     {
//         id:"1",

//         name: "prducto1",
        
//         description: "description, product",
        
//         price: 1800,
        
//         stock: 10,
        
//         imgUrl: "https://images.ctfassets.net/4cd45et68cgf/4nBnsuPq03diC5eHXnQYx/d48a4664cdc48b6065b0be2d0c7bc388/Netflix-Logo.jpg"
//         },

//             {
//             id:"2",
    
//             name: "prducto2",
            
//             description: "description, product",
            
//             price: 2000,
            
//             stock: 9,
            
//             imgUrl: "https://static-assets.bamgrid.com/product/disneyplus/images/share-default.8bf3102623e935e7bc126df36b956b98.jpg"
//             }
// ]

async getAllProducts(){
    return this.products;
}

async create(createProduct){
    const id=this.products.length+1;
 this.products = [...this.products, {id, ...createProduct}];
    return {id, ...createProduct}
}


async update(updateProduct, id){
    this.products = this.products.map(person =>{
        if (person.id==id){
           return {
            ...person, 

        name: updateProduct.name,        
        description: updateProduct.description,       
        price: updateProduct.price,       
        stock: updateProduct.stock,       
        imgUrl: updateProduct.imgUrl,          
           }
        }
        return person;
    })
    return `update exit in product id ${id}`;
}

async findOne(id){
    return this.products.find(person => person.id==id);
}

async remove(id){
    this.products = this.products.filter(person => person.id!=id);
    return  `remove exit in id ${id}`
}

}