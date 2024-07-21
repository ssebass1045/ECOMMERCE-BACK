import { Injectable } from "@nestjs/common";
import { User } from "./entities/user.entity";



@Injectable()
export class UsersRepository {
 user: User[] = [
    {
    id: 1,
    email: "1@mail",  
    name: "ejemplo1", 
    password: "1234",   
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
async findAll(page: number, Limit: number){
    const start = (page - 1) * Limit
    const end = start + +Limit
    const user = this.user.slice(start, end)
    
    return user.map(({password, ...user})=> user);
    // this.user = this.user.map(person => {
        //     return {...person, password:null}
        // })
        // return this.user;
    }

    
    async create(createUser){
        const id=this.user.length+1;
        this.user = [...this.user, {id, ...createUser}];
        return {id, ...createUser}
    }
    
    async update(updateUser, id){
        this.user = this.user.map(person =>{
            if (person.id==id){
                return {
                    ...person, 
                    
            email: updateUser.email,       
            name: updateUser.name,        
            password: updateUser.password,         
            address: updateUser.address,         
            phone: updateUser.phone,          
            country:  updateUser.country,           
            city: updateUser.city,
        }
    }
    return person;
})
return `update exit in user id ${id}`;
}

async findOne(id){
    return this.user.find(person => person.id==id);
}

async remove(id){
    this.user = this.user.filter(person => person.id!=id);
    return  `remove exit in id ${id}`
}

}