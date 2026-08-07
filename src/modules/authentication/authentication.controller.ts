import { Body, Controller, Get, Post, ValidationPipe } from "@nestjs/common";
import { SignupUserDto } from "../users/dto/SignupUserDto";
import { LoginUserDto } from "../users/dto/LoginUserDto";
import { AuthenticationService } from "./authentication.service";
import { SingupDto } from "./dto/authentication.dto";


@Controller("auth")
export class AuthenticationController{

    constructor(private readonly authenticationService:AuthenticationService){

    }

    @Post("signup")
    signup(@Body(new ValidationPipe) data:SingupDto){

        return {message:"signup successful",data}

}

    @Post("login")
    async login(@Body(new ValidationPipe) data: LoginUserDto ){

}
    @Get("testoo")
    async testoo(){
        return {message:"testoo successful"}
    }

}