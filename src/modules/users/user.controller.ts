import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import type {Request, RequestHandler, Response} from 'express';
import { UserService } from './user.service';

@Controller("users")
export class UserController{
    constructor(private readonly userservice :UserService){}

    @Get()
    getusers(@Req() req:Request , @Res() res:Response){
        let data  = this.userservice.getuser()
        res.status(200).json({message:"ok", data})
    }

    @Post('adduser') // This is url for Endpoint
    adduser(@Body() body: any , @Res() res:Response){
        console.log(body.name)
        res.status(201).json({message:"ok"})
    }


}