class UsuarioDTO {
    constructor(username, email, apenom,foto){
        this.username = username;
        this.email = email;        
        this.apenom = apenom;
        this.foto=foto
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
    getFoto(){
        return this.foto;
    }

    setFoto(foto){
        return this.foto = foto;
    }
}
module.exports=UsuarioDTO