import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Request } from 'express';
import { Observable } from 'rxjs';

function validate(request){
    const authHeader = request.headers.autorization;

    if(!authHeader){
        return false;
    }
    const auth = authHeader.split(' ')[1];

    if(!auth){
        return false;
    }

    const [email, password] = auth.split(':');

    if(!email || !password){
        return false;
    }
    return true;
}

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();

    return validate(request);
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