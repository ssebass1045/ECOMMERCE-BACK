import { Injectable } from "@nestjs/common";
import { CreateProductDto } from "./dto/cretae-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Products } from "./entities/products.entity";
import { Repository } from "typeorm";
import { Categories } from "src/categories/entities/categories.entity";
import * as data from "../data.json";

@Injectable()
export class ProductsService {
    constructor(
      @InjectRepository(Products) private _ProductsRepository: Repository<Products>,
      @InjectRepository(Categories) private _categoriesRepository: Repository<Categories>
    ){}
    
    async getAllProducts(page: number, Limit: number): Promise<Products[]>{
      let products = await this._ProductsRepository.find({
        relations: {
          category: true,
        },
      });

      const start = (page - 1) * Limit;
      const end = start + +Limit;

      products = products.slice(start, end);
      return products;
    }

    findOne(id: string) {
        const product = this._ProductsRepository.findOneBy({ id });

        if (!product) {
          return 'product not found';
        }
        return product;
    }

    async create(){
        const categories = await this._categoriesRepository.find();

        if(!categories){
          return "Ejecuta el seeder de categorias primero";
        }

        data?.map(async (element) => {
          const category = categories.find(
            (category) => category.name === element.category,
          );

          const product = new Products();
          product.name = element.name;
          product.description = element.description;
          product.price = element.price;
          product.imgUrl = element.imgUrl;
          product.stock = element.stock;
          product.category = category;

          await this._ProductsRepository
          .createQueryBuilder()
          .insert()
          .into(Products)
          .values(product)
          .orUpdate(['description', 'price', 'imgUrl', 'stock'], ['name'])
          .execute();
        });

        return 'Products added';
    }

    async update(id: string, product: Products){
       await this._ProductsRepository.update(id, product);

       const update = await this._categoriesRepository.findOneBy({ id });

       return update;
    }


    // remove(id: number) {
    //     return this._ProductRepository.remove(id);
    // }
}