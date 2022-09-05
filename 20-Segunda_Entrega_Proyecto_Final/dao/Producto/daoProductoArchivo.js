import ContenedorArchivo from '../../contenedores/contenedorArchivo.js';

const url = '../../archivos/productos.json';

class daoProductoArchivo extends ContenedorArchivo {
  constructor () {
    super(url)
  }
}

export default daoProductoArchivo;
