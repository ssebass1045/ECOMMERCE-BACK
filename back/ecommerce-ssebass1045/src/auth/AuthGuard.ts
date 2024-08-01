import { BadRequestException, CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';


@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService){}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    // Autorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
    // eyJzdWIiOiIxMjM0NTYiLCJuYW1lIjoiSm9obiBEb2UiLCJhdWQiOiJodHRwczovL2VqZW1wbGUuY29tIiwiZXhwIjoxNTE2MjM<ctrl61>5MDIyfQ.
    // SflKxwRJSMeKKF2QT4fwpMeoM84w_7<ctrl61>bEn_4uIrJ0
    const authorizationHeader = request.headers.authorization;

    if (!authorizationHeader) {
      throw new UnauthorizedException('Missing authorization header');
    }

    const [authType, token] = authorizationHeader.split(' ');

    if (authType !== 'Bearer' || !token) {
      throw new BadRequestException('Wrong authentication method');
    }
  

    // const token = request.header.autorization?.split(' ')[1];

    // if(!token) {
    //   throw new UnauthorizedException('Invalid token');
    // }

    try {
      const secret = process.env.JWT_SECRET;
      const user = this.jwtService.verify(token, { secret }); //{id,email,exp,iat}

      user.exp = new Date(user.exp * 1000)
      user.iat = new Date(user.iat * 1000)
      
      if(user.isAdmin) {
        user.roles = ['admin'];
      }else {
        user.roles = ['user'];
      }
      
      request.user = user; 

      return true
    } catch (error) {
      throw new UnauthorizedException('Invalid token');
    }

  }
}

// function validateEmailRequest(request: Request) {
//   const email = request.headers['email'];
//   return email === '1@mail';
// }

// function validatePasswordRequest(request: Request) {
//   const password = request.headers['password'];
//   return password === '1234';
// }

// @Injectable()
// export class AuthEmail implements CanActivate {
//   canActivate(
//     context: ExecutionContext,
//   ): boolean | Promise<boolean> | Observable<boolean> {
//     const request = context.switchToHttp().getRequest();
//     return validateEmailRequest(request);
//   }
// }

// @Injectable()
// export class AuthPassword implements CanActivate {
//   canActivate(
//     context: ExecutionContext,
//   ): boolean | Promise<boolean> | Observable<boolean> {
//     const request = context.switchToHttp().getRequest();
//     return validatePasswordRequest(request);
//   }
// }