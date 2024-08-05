import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/users/entities/users.entity';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';
import * as brypt from "bcrypt";
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
     private usersService: UsersService,
    private jwtService: JwtService ) {}


async signUp(user: Partial<Users>){
  const {email, password} = user;

  const foundUser = await this.usersService.findOneByEmail(email);

  if(foundUser){
    throw new BadRequestException('User already exists');
  }
  const hashedPassword = await brypt.hash(password, 10)

  if (!hashedPassword){
    throw new BadRequestException(" Encrypt error")
  }


  return await this.usersService.create({

    ...user, 
    password: hashedPassword,
  })

}


async signIn(email: string, password: string){
  const foundUser = await this.usersService.findOneByEmail(email);

  if (!foundUser){
    throw new BadRequestException("invalid credentials");
  }
  const isPasswordValid = await brypt.compare(password, foundUser.password);

    if (!isPasswordValid) {
      throw new BadRequestException("invalid credentials");
    }
    const userPayload = {
      id: foundUser.id,
      email: foundUser.email,
      isAdmin: foundUser.isAdmin,
    };

    const token = this.jwtService.sign(userPayload); //eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
    // eyJzdWIiOiIxMjM0NTYiLCJuYW1lIjoiSm9obiBEb2UiLCJhdWQiOiJodHRwczovL2VqZW1wbGUuY29tIiwiZXhwIjoxNTE2MjM<ctrl61>5MDIyfQ.
    // SflKxwRJSMeKKF2QT4fwpMeoM84w_7<ctrl61>bEn_4uIrJ0

    return {
      message: "user logged in succesfully", token,
    };

  }

}



