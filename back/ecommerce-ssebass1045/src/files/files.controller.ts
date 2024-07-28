import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, ParseFilePipe, MaxFileSizeValidator, FileTypeValidator, Put } from '@nestjs/common';
import { FilesService } from './files.service';
import { CreateFileDto } from './dto/create-file.dto';
import { UpdateFileDto } from './dto/update-file.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('files')
export class FilesController {
  constructor(private readonly filesService: FilesService) {}


  @Put('uploadImage/:id')
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




  @Get()
  findAll() {
    return this.filesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.filesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFileDto: UpdateFileDto) {
    return this.filesService.update(+id, updateFileDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.filesService.remove(+id);
  }
}
