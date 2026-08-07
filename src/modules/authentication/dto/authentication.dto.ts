import { IsEmail, IsNotEmpty, IsStrongPassword, MaxLength, MinLength,  } from "class-validator";
import { IsMatch } from "src/common/Decorator/match";



export class LoginDto{
    @IsEmail()
    email!:string;
    @IsStrongPassword()
    password!:string;
}

export class SingupDto extends LoginDto{
    @MinLength(8, {message: "Username must be at least 8 characters long"})
    @MaxLength(20, {message: "Username must be at most 20 characters long"})
    @IsNotEmpty()
    username!:string;

    @IsMatch("password", {message: "Passwords do not match"})
    confirmPassword!:string;
}