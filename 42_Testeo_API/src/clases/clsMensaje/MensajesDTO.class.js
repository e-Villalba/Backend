class ProductoDTO {
    constructor(email, fecha, mensaje){
        this.email = email;
        this.fecha = fecha;
        this.mensaje = mensaje;
    }

    getEmail(){
        return this.email;
    }

    setEmail(email){
        return this.email = email;
    }

    getFecha(){
        return this.fecha;
    }

    setFecha(fecha){
        return this.fecha = fecha;
    }

    getMensaje(){
        return this.mensaje;
    }

    setMensaje(mensaje){
        return this.mensaje = mensaje;
    }
}
module.exports=ProductoDTO