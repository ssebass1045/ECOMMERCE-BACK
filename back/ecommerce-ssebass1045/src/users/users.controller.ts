import { Controller, Get, Post, Body, Query, Patch, Param, Delete, Put, HttpCode, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import {  AuthGuard } from 'src/auth/AuthGuard';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @UseGuards(AuthGuard)
  findAll(@Query('page') page: number, @Query('Limit') Limit: number){
    if(page && Limit ){
      return this.usersService.findAll(page ,Limit);
    }
    return this.usersService.findAll(1, 3);
  }

  @Get(':id')
  @UseGuards(AuthGuard)
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Post()
  @HttpCode(201)
  create(@Body()user: CreateUserDto) {
    return this.usersService.create(user);
  }


  @Put(":id")
  @UseGuards(AuthGuard)
  update(@Body() user: any, @Param("id") id: string) {
    return this.usersService.update(id, user);
  }


  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  //   return this.usersService.update(+id, updateUserDto);
  // }

  @Delete(':id')
  @UseGuards(AuthGuard)
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
