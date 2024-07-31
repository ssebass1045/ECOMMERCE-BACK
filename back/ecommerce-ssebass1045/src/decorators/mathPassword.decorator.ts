import { ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";

@ValidatorConstraint({name: 'MathPassword', async: false})
export class MathPassword implements ValidatorConstraintInterface{
    validate(password: string, args?: ValidationArguments): Promise<boolean> | boolean {

        if(password !== args.object [args.constraints[0]]) return false;
        return true;
    }

    defaultMessage(validationArguments?: ValidationArguments): string {
        return "password do not match";
    }
}