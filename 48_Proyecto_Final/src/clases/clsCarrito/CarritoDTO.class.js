class CarritoDTO {
    constructor(_id,username, products, estado){
        this._id = _id;
        this.username = username;
        this.products = products;
        this.estado = estado;    
    }

    getId(){
        return this._id;
    }
    getUsername(){
        return this.username;
    }

    setUsername(username){
        return this.username = username;
    }

    getProducts(){
        return this.products;
    }

    setProducts(products){
        return this.products = products;
    }

    getEstado(){
        return this.estado;
    }

    setEstado(estado){
        return this.estado = estado;
    }
}
module.exports=CarritoDTO