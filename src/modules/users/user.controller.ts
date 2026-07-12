import { BadRequestException, Body, Controller, Get, HttpException, ParseIntPipe, Post, Req, Res, ValidationPipe } from '@nestjs/common';
import type {Request, RequestHandler, Response} from 'express';
import { UserService } from './user.service';
import { CustomValidationPipe } from 'src/common/pipe/validation.pipe';
import { addUserSchema } from './user.validtion';
import { SignupUserDto } from './dto/SignupUserDto';
import { ValidationPipee } from 'src/common/pipe/validation.validator.pipe';

@Controller("users")
export class UserController{
    constructor(private readonly userservice :UserService){}

    @Get() //, @Res() res:Response
    async getusers(@Req() req:Request ){
        let data  = this.userservice.findAll()
        return data
    }

    @Post('adduser') // This is url for Endpoint
    async adduser(@Body(new ValidationPipe) data: SignupUserDto ){
        let user = this.userservice.adduser(data)
        return user
    }


}