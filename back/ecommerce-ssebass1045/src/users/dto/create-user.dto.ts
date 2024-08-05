import { Matches, IsEmail, IsNotEmpty, IsNumber, IsString, MaxLength, MinLength, Validate, IsEmpty } from "class-validator";
import { MathPassword } from "src/decorators/mathPassword.decorator";

export class CreateUserDto {

    /**
     * @description Este parámetro recibe el nombre como un string de al menos 3 caracteres
     * @example Sebastian
     */ 
    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    name: string;

    /**
     * @description Este parámetro recibe el correo electrónico en un formato válido
     * @example sebastian@example.com
     */ 
    @IsNotEmpty()
    @IsEmail()
    email: string;

    /**
     * @description Este parámetro recibe la contraseña que debe contener al menos una letra mayúscula, una letra minúscula, un número y un carácter especial
     * @example Password123!
     */ 
    @IsNotEmpty()
    @IsString()
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/, {
        message: 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character',
    })
    @MinLength(8)
    @MaxLength(15)
    password: string;

    /**
     * @description Este parámetro recibe la confirmación de la contraseña y debe coincidir con la contraseña
     * @example Password123!
     */ 
    @IsNotEmpty()
    @Validate(MathPassword, ['password'])
    passwordConfirmation: string;

    /**
     * @description Este parámetro recibe la dirección como un string de al menos 3 caracteres
     * @example Calle 123, Bogotá
     */ 
    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    @MaxLength(80)
    address: string;

    /**
     * @description Este parámetro recibe el número de teléfono como un número entero
     * @example 3001234567
     */ 
    @IsNotEmpty()
    @IsNumber()
    phone: number;

    /**
     * @description Este parámetro recibe el país como un string de al menos 5 caracteres
     * @example Colombia
     */ 
    @IsNotEmpty()
    @IsString()
    @MinLength(5)
    @MaxLength(20)
    country: string;

    /**
     * @description Este parámetro recibe la ciudad como un string de al menos 5 caracteres
     * @example Bogotá
     */ 
    @IsNotEmpty()
    @IsString()
    @MinLength(5)
    @MaxLength(20)
    city: string;

    /**
     * @description Este parámetro indica si el usuario es administrador, es opcional y por defecto está vacío
     * @example false
     */ 
    @IsEmpty()
    isAdmin?: boolean;
}
