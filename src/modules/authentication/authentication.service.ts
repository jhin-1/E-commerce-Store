import { Injectable } from "@nestjs/common";


@Injectable()
export class AuthenticationService{
    constructor(){}

    singup(){
        return {id:1, name:"AhmedYosri", email:"ahmedyosri@example.com"};
    }
}