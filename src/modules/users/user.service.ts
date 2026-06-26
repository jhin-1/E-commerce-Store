import { Injectable } from '@nestjs/common';
import { addUserDto } from './dto/user.dto';

@Injectable()
export class UserService {
    getuser(){
        let users = [1,2,3,4,5,6]
        console.log(users)
        return users
    }

    adduser(data:addUserDto){
        return {message:"user add successful",data}
    }
}