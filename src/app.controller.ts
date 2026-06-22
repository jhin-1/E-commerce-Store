import { Controller, Get, Post, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';
import type {Request, Response} from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Res() res:Response): any {
    let data =  this.appService.getHello();
    return res.status(200).json({message: "Ok", data});
  }

  @Get('/user')
  getUser(@Res() res:Response): any {
    let data = {
      id:1,
      name: "AhmedYosri",
      age :28 
    }
    return res.status(200).json({message:"OK", data})
}

  @Post('addUser') // This is a POST endpoint to add a user (Url)
  addUser(@Req() req: Request, @Res() res: Response): any {
    let data = req.body;
    console.log(req.query)
    console.log(data)
    return res.status(201).json({message:"OK"})
  }
}1

