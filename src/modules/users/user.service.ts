import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    getuser(){
        let users = [1,2,3,4,5,6]
        console.log(users)
        return users
    }
}