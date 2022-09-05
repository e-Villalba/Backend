class ContenedorMemoria {
  
  constructor(arr) {
    this.arr = arr
  }    

  async listarTodos() { 
    const arr = this.arr       
    console.log(this.arr);  
    return arr;  
  }

  async buscarPorCodigo(i) {    
    if (this.arr === 0) {return "Array en memoria Vacía"} 
    let index = this.arr.findIndex(x => x.codigo == i)
    if (index == -1) {
      return "Código Inexistente"
    } else {
      return this.arr[index]         
    }  
  }  

  async crear(obj) {
    let timestamp = new Date().getTime(); 
    let codigo;
    if (this.arr.length === 0) {
      codigo = 1
    } else {
      codigo = this.arr.length + 1
    }         
    obj.codigo = codigo
    obj.timestamp = timestamp 
     
    this.arr.push(obj)       
    return(obj)
    
  }

  async eliminar(i) {
    let index = this.arr.findIndex(x => x.codigo == i)
    if (index == -1) {
      return "No existe el Código"
    } else {
      this.arr.splice(index, 1)
      console.log('Elemento Eliminado');
      return "Elemento Eliminado"
    }   
    
  }

  async actualizar(i, object) {
    let index = this.arr.findIndex(x => x.codigo == i)
    if (index == -1) {
      return ({ error: 'Producto no encontrado' })
    } 
    object.id = i
    object.timestamp = this.arr[index].timestamp    
    const editedProduct = {...this.arr[index], ...object}    
    this.arr[index] = editedProduct  
    console.log("Producto actualizado");  
    return "Producto Actualizado"
  }
}

export default ContenedorMemoria;