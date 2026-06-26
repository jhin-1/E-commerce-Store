import { BadRequestException, Body, Controller, Get, HttpException, ParseIntPipe, Post, Req, Res } from '@nestjs/common';
import type {Request, RequestHandler, Response} from 'express';
import { UserService } from './user.service';
import { addUserDto } from './dto/user.dto';
import { CustomValidationPipe } from 'src/common/pipe/validation.pipe';
import { addUserSchema } from './user.validtion';

@Controller("users")
export class UserController{
    constructor(private readonly userservice :UserService){}

    @Get()
    async getusers(@Req() req:Request , @Res() res:Response){
        let data  = this.userservice.getuser()
        res.status(200).json({message:"ok", data})
    }

    @Post('adduser') // This is url for Endpoint
    async adduser(@Body(new CustomValidationPipe(addUserSchema.body)) data: addUserDto ){
        let user = this.userservice.adduser(data)
        return user
    }


}