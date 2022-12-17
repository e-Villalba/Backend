class ProductoDTO {
    constructor(title, price, category,thumbnail){
        this.title = title;
        this.price = price;
        this.category = category;
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

    getCategory(){
        return this.category;
    }

    setCategory(category){
        return this.category = category;
    }
    getThumbnail(){
        return this.thumbnail;
    }

    setThumbnail(thumbnail){
        return this.thumbnail = thumbnail;
    }
}
module.exports=ProductoDTO