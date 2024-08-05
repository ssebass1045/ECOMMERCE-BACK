import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Categories } from './entities/categories.entity';
import * as data from '../data.json';


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

}
