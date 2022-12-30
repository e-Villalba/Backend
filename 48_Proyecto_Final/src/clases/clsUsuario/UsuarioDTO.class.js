class UsuarioDTO {
    constructor(username, email, apenom){
        this.username = username;
        this.email = email;        
        this.apenom = apenom;
    }

    getEmail(){
        return this.email;
    }

    setEmail(email){
        return this.email = email;
    }

    getUserName(){
        return this.username;
    }

    setUserName(username){
        return this.username = username;
    }

    getApenom(){
        return this.apenom;
    }

    setApenom(apenom){
        return this.apenom = apenom;
    }
}
module.exports=UsuarioDTO