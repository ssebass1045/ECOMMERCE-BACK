import { Injectable } from "@nestjs/common";
import { User } from "./entities/user.entity";



@Injectable()
export class UsersRepository {
private user: User[] = [
    {
    id: 1,

    email: "user@example",
    
    name: "ejemplo1",
    
    password: "clave123",
    
    address: "streat22",
    
    phone: "4248963",
    
    country:  "Colombia",
    
    city: "Medellin",
    },
    {
        id: 2,
    
        email: "user2@example",
        
        name: "ejemplo2",
        
        password: "clave1234",
        
        address: "streat33",
        
        phone: "456778",
        
        country:  "Colombia",
        
        city: "Bogota",
        }
]
async findAll(){
    return this.user;
}

}