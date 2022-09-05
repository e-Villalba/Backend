import contenedorMemoria from "../../contenedores/contenedorMemoria.js"
let productos=[]
class daoProductoMemoria extends contenedorMemoria {
    constructor() {
        super(productos)
    }
    async addProduct(idCart, product) {
        try {
          const arr = await super.list()
          if (arr.length === 0) {return ({"Error" : "No hay Carritos"})} 
      
          let indexCart = arr.findIndex(el => el.id == idCart)
          if (indexCart == -1) {
            return ({ error: 'Carrito no encontrado' })
          }   
          
          arr[indexCart].products.push(product)
          await super.changeById(idCart, arr[indexCart])
          return "Producto Agregado"      
        } 
        catch (err) {      
          throw new Error('Error de escritura', err)
        }  
      }
    
}

export default daoProductoMemoria;
