import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly _userRepository: UsersRepository){}
  
  
  create(createUser: CreateUserDto) {
    return this._userRepository.create(createUser);
  }

  findAll(page: number, Limit: number) {
    return this._userRepository.findAll(page, Limit);
  }

  update(updateUser: UpdateUserDto, id: string){
    return this._userRepository.update(updateUser, id);
  }

  findOne(id: number) {
    return this._userRepository.findOne(id);
  }

  // update(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }

  remove(id: number) {
    return this._userRepository.remove(id);
  }
}
