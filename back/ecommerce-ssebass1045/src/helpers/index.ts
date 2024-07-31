export function validate(request){
    const authHeader = request.headers.autorization;
    //Basic: sebas@gmail.com:Password123

    if(!authHeader){
        return false;
    }
    const auth = authHeader.split(' ')[1]; //["Basic", "sebas@mail.com:Password123"]

    if(!auth){
        return false;
    }

    const [email, password] = auth.split(':'); //["sebas@mail.com","Password123"]

    if(!email || !password){
        return false;
    }
    return true;
}
