import { Controller, Get, Post, Body, Query, Patch, Param, Delete, Put, HttpCode, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import {  AuthGuard } from 'src/auth/AuthGuard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @HttpCode(201)
  create(@Body() createUser: CreateUserDto) {
    return this.usersService.create(createUser);
  }

  @Get()
  @UseGuards(AuthGuard)
  findAll(@Query('page') page: number, @Query('Limit') Limit: number){
    if(page && Limit ){
      return this.usersService.findAll(page ,Limit);
    }
    return this.usersService.findAll(page, Limit);
  }

  @Put(":id")
  @UseGuards(AuthGuard)
  update(@Body() UpdateUser, @Param("id") id: string) {
    return this.usersService.update(UpdateUser, id);
  }

  @Get(':id')
  @UseGuards(AuthGuard)
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  //   return this.usersService.update(+id, updateUserDto);
  // }

  @Delete(':id')
  @UseGuards(AuthGuard)
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
