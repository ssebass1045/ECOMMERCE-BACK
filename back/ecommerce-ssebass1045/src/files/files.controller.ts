import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, ParseFilePipe, MaxFileSizeValidator, FileTypeValidator, Put, UseGuards } from '@nestjs/common';
import { FilesService } from './files.service';
import { CreateFileDto } from './dto/create-file.dto';
import { UpdateFileDto } from './dto/update-file.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { AuthGuard } from 'src/auth/AuthGuard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';


@ApiTags('FILES')
@Controller('files')
export class FilesController {
  constructor(private readonly filesService: FilesService) {}


  @ApiBearerAuth()
  @Put('uploadImage/:id')
  @UseGuards(AuthGuard)
  @UseInterceptors(FileInterceptor('file'))
  create(
    @Param('id') productId: string, 
    @UploadedFile(
      new ParseFilePipe({
    validators: [
      new MaxFileSizeValidator({
        maxSize: 200000,
        message: 'File must be 200kb max'
      }),
      new FileTypeValidator({
        fileType: /(jpg|png|jpeg|gif|webp)$/,
      }),
    ],
  })) file: Express.Multer.File) {
    return this.filesService.create(file, productId)
  }


}
