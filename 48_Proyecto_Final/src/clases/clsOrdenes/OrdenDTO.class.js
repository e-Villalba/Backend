class OrdenDTO {
    constructor(_id,nro_orden,username,fecha,direccion,products,total,estado){
        this._id = _id;
        this.nro_orden=nro_orden;        
        this.username = username;
        this.fecha=fecha;
        this.direccion=direccion;
        this.products = products;
        this.total=total;
        this.estado = estado;    
    }

    getId(){
        return this._id;
    }

    getNroOrden(){
        return this.nro_orden;
    }
    setNroOrden(nro_orden){
        return this.nro_orden = nro_orden;
    }

    getUsername(){
        return this.username;
    }
    setUsername(username){
        return this.username = username;
    }
    getFecha(){
        return this.fecha;
    }
    setFecha(fecha){
        return this.fecha = fecha;
    }
    getDireccion(){
        return this.direccion;
    }
    setDireccion(direccion){
        return this.direccion = direccion;
    }
    getProducts(){
        return this.products;
    }
    setProducts(products){
        return this.products = products;
    }
    getTotal(){
        return this.total;
    }

    setEstado(total){
        return this.total = total;
    }    
    getEstado(){
        return this.estado;
    }

    setEstado(estado){
        return this.estado = estado;
    }
}
module.exports=OrdenDTO