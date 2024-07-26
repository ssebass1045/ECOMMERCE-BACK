import { Injectable } from "@nestjs/common";


type User = {
    id: number;
    email: string;
    name: string;
    password: string;
    address: string;
    phone: string;
    country?: string | undefined;
    city?: string | undefined;
};


@Injectable()
export class UsersRepository {
 private users: User[] = [
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
    const user = this.users.slice(start, end)
    
    return user.map(({password, ...user})=> user);
    // this.user = this.user.map(person => {
        //     return {...person, password:null}
        // })
        // return this.user;
    }

    
    async create(createUser){
        const id=this.users.length+1;
        this.users = [...this.users, {id, ...createUser}];
        return {id, ...createUser}
    }
    
    async update(updateUser, id){
        this.users = this.users.map(person =>{
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
    return this.users.find(person => person.id==id);
}

async remove(id){
    this.users = this.users.filter(person => person.id!=id);
    return  `remove exit in id ${id}`
}

}