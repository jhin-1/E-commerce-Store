import { IsEmail, IsEnum, IsOptional, IsString, IsStrongPassword, Max, MaxLength, MinLength } from "class-validator";


export class LoginUserDto {

    @IsEmail()
    email!: string;

    @IsString()
    @IsStrongPassword()
    password!: string;
}