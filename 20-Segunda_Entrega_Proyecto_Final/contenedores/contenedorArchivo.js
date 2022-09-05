//import {list, save, getById, deleteById, changeById} from '../utils/contenedor.js';

class ContenedorArchivo {
  constructor(ruta) {
    this.ruta = ruta;
  }
  
  async listarTodos() {
    const data = await list(this.ruta) 
    console.log(data);    
    return data;  
  }

  async buscarPorCodigo(x) {
    const data =  await getById(x, this.ruta) 
    console.log(data)   
    return data
  }

  async crear(obj) {
    const data = await save(obj, this.ruta)
    console.log(data) 
    return data
  }

  async eliminar(x) {
    const data = await deleteById(x, this.ruta)
    console.log(data) 
    return data
  }

  async actualizar(i, object) {
    const data = await changeById(i, object, this.ruta)
    console.log(data) 
    return data
  }
 
}

export default ContenedorArchivo;