import { Controller, Get, Post, Body, Patch, Param, Delete, Headers } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { ApiTags } from '@nestjs/swagger';


@ApiTags('AUTH')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}


  @Post("/signup")
  signUp(@Body()user: CreateUserDto){
    const {passwordConfirmation, ...cleanUser } = user;

    return this.authService.signUp(cleanUser);
  }



  @Post("/signin")
  signIn(@Body() credentials: CreateAuthDto) {
    const { email, password } = credentials
    return this.authService.signIn(email, password);
  }
}


