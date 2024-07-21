import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './cretae-product.dto';

export class UpdateProductDto extends PartialType(CreateProductDto) {}
