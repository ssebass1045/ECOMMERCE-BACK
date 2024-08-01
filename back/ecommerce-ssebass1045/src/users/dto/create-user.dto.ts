import { Matches, IsEmail, IsNotEmpty, IsNumber, IsString, MaxLength, MinLength, validate, Validate, IsEmpty,  } from "class-validator";
import { MathPassword } from "src/decorators/mathPassword.decorator";

export class CreateUserDto{
    
    
    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    name: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/, {
        message: 
        'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character',
    })
    @MinLength(8)
    @MaxLength(15)
    password: string;


    @IsNotEmpty()
    @Validate(MathPassword,['password'])
    passwordConfirmation: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    @MaxLength(80)
    address: string;

    @IsNotEmpty()
    @IsNumber()
    phone: number;

    @IsNotEmpty()
    @IsString()
    @MinLength(5)
    @MaxLength(20)
    country: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(5)
    @MaxLength(20)
    city: string;

    @IsEmpty()
    isAdmin?: boolean;

}
