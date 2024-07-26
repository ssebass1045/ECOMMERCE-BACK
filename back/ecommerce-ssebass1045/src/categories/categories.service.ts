import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Categories } from './entities/categories.entity';
import * as data from '../data.json';
// import { CreateCategoryDto } from './dto/create-category.dto';
// import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoriesService {
  constructor( @InjectRepository(Categories)
    private _categoriesRepository: Repository<Categories>,) {}
    
    async findAll() {
      return await this._categoriesRepository.find();
    }


    async create() {
      data?.map(async (element) => {
        await this._categoriesRepository
        .createQueryBuilder()
        .insert()
        .into(Categories)
        .values({ name: element.category })
        .onConflict(`("name") DO NOTHING`)
        .execute();
      })
      return 'Categories added';
    }

//   findOne(id: number) {
//     return `This action returns a #${id} category`;
//   }

//   update(id: number, updateCategoryDto: UpdateCategoryDto) {
//     return `This action updates a #${id} category`;
//   }

//   remove(id: number) {
//     return `This action removes a #${id} category`;
//   }
// 
}
