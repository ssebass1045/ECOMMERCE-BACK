import { Injectable } from "@nestjs/common";




@Injectable()
export class ProductsRepository {
private products


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