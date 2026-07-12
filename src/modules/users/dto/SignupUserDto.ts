import { IsEmail, IsEnum, IsOptional, IsString, IsStrongPassword, Max, MaxLength, MinLength } from "class-validator";
import { UserGender, UserRole } from "src/common/Enums/user.enum";


export class SignupUserDto {
    @IsString({message: "Username must be a string"}) 
    @MinLength(8, {message: "Username must be at least 8 characters long"})
    @MaxLength(20, {message: "Username must be at most 20 characters long"})
    userName!: string;

    @IsString()
    @IsOptional()
    profilePic?: string | null;

    @IsEnum(UserGender)
    gender!: UserGender;

    @IsEnum(UserRole)
    @IsOptional()
    role?: UserRole; 

    @IsEmail()
    email!: string;

    @IsString()
    @MinLength(11, {message: "Phone number must be at least 11 characters long"})
    @MaxLength(11, {message: "Phone number must be at most 11 characters long"})
    phone!:string;

    @IsStrongPassword()
    password!: string;
}