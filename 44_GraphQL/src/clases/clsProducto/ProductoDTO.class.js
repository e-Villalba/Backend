class ProductoDTO {
    constructor(id,title, price, thumbnail){
        this._id = id;
        this.title = title;
        this.price = price;
        this.thumbnail = thumbnail;
    }

    getTitle(){
        return this.title;
    }

    setTitle(title){
        return this.title = title;
    }

    getPrice(){
        return this.price;
    }

    setPrice(price){
        return this.price = price;
    }

    getThumbnail(){
        return this.thumbnail;
    }

    setThumbnail(thumbnail){
        return this.thumbnail = thumbnail;
    }
}
module.exports=ProductoDTO