import { BadRequestException, ConflictException, Injectable } from '@nestjs/common';
import { SignupUserDto } from './dto/SignupUserDto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/db/models/user.model';
import { Model } from 'mongoose';

@Injectable()
export class UserService {

    userModel : Model<User>
    constructor( @InjectModel(User.name)userModel:Model<User> ){
        this.userModel = userModel
    }

    async findAll(){
        return await this.userModel.find()
    }

    async adduser(data:SignupUserDto){
        let {userName, gender , email , phone , password  } = data
        let existeduser = await this.userModel.findOne({email:email}).select("_id")
        if (existeduser){
            throw  new ConflictException(" This email  is already exits")
        }
        let user  = await this.userModel.create({userName:userName,gender:gender,email:email,password:password,phone:phone} )
        return {message:"user add successful",user}
    }
}