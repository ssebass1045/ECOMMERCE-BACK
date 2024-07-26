import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/users/entities/users.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Users) private _usersRepository: Repository<Users>,
  ) {}

  async auth(credential) {
    const { email, password } = credential;

    // Buscar al usuario por email
    const user = await this._usersRepository.findOne({ where: { email } });

    // Verificar si el usuario existe y si la contraseña es correcta
    if (user && user.password === password) {
      return user;
    }

    return "user o Password incorrect";
  }
}





// import { Injectable } from '@nestjs/common';
// import { CreateAuthDto } from './dto/create-auth.dto';
// import { UpdateAuthDto } from './dto/update-auth.dto';
// import { UsersRepository } from 'src/users/users.repository';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Users } from 'src/users/entities/users.entity';
// import { Repository } from 'typeorm';

// @Injectable()
// export class AuthService {
//   constructor(@InjectRepository(Users) private _usersRepository:Repository<Users> ){}

  
//   auth(credential) {
//     const { email, password } = credential;
//     const result = this._usersRepository.user.find(person => {
//       if (email === person.email && password === person.password) {
//         return person;
//       } 
//     })
//     return result? result: "user o Password incorrect";
//   }

  // findAll() {
  //   return `This action returns all auth`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} auth`;
  // }

  // update(id: number, updateAuthDto: UpdateAuthDto) {
  //   return `This action updates a #${id} auth`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} auth`;
  // }

