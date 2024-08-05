import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateFileDto } from './dto/create-file.dto';
import { UpdateFileDto } from './dto/update-file.dto';
import { FilesRepository } from './files.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Products } from 'src/products/entities/products.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FilesService {
  constructor(private readonly filesRepository: FilesRepository,
    @InjectRepository(Products)
    private readonly productsRepository: Repository<Products>
  ){}

  async create(file: Express.Multer.File, productId: string) {
    const product = await this.productsRepository.findOneBy({id: productId})

    if (!product) {
      throw new NotFoundException('Product not found')
    } const uploadedImage = await this.filesRepository.uploadImage(file);
    await this.productsRepository.update(product.id, {
      imgUrl: uploadedImage.secure_url,
    });
    return await this.productsRepository.findOneBy({
      id: productId,
    });
  }

}
