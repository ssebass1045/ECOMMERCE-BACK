import { PickType } from "@nestjs/swagger"; 
import { CreateUserDto } from "src/users/dto/create-user.dto";

export class CreateAuthDto extends PickType(CreateUserDto, [
    'password',
    'email'
]) {}
