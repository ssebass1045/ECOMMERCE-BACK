import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersRepository } from './users.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './entities/users.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(Users) private _usersRepository:Repository<Users> ){}
  
  
  async findAll(page: number, Limit: number) {
    let users = await this._usersRepository.find();
    
    const start = (page - 1) * Limit;
    const end = start + +Limit;
    users = users.slice(start, end);
    return users.map(({ password, ...user }) => user);
  }
  

  async findOne(id: string) {
    const user = await this._usersRepository.findOne({
      where: { id },
      relations: {
        orders: true,
      },
    });
    
    if (!user) {
      return 'User not found'
    }
    const { password, ...userWithThoutPassword } = user;
    return userWithThoutPassword;
  }
  

  async create(user: Partial<Users>) {
  const newUser = await this._usersRepository.save(user);

  const { password, ...userWithThoutPassword } = newUser;
    return userWithThoutPassword;
  }
  
  
  async update(id: string, user: Partial<Users>){
    await this._usersRepository.update(id, user);

    const update = await this._usersRepository.findOneBy({ id });
    const { password, ...userWithThoutPassword } = update;
    return userWithThoutPassword;
  }


  async remove(id: string): Promise<Partial<Users>> {
    const user = await this._usersRepository.findOneBy({ id });
    this._usersRepository.remove(user);
    const { password, ...userWithThoutPassword } = user;
    return userWithThoutPassword;
  }


  async findOneByEmail(email: string): Promise<Users> {
    return await this._usersRepository.findOneBy({ email });
  }
}
