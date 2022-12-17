const CustomError = require("../CustomError.class")
const fs = require("fs")
const config = require("../../../conexiones/config")
const DAO =require("../DAO.class")



let instanceProducto = null;
class ProductosDAOFile extends DAO {
    constructor(ruta) {
        super();
        this.ruta = `${config.filedb.pathdb}/productos.json`;       
    }

    async listar(title) {
        //console.log("listar de file", title)
        const objs = await this.listarAll()
        const buscado = objs.find(o => o.title == title)
        //console.log("listar de file buscado", buscado)
        return buscado
    }

    async listarAll() {
        try {            
            const objs = await fs.promises.readFile(this.ruta, 'utf-8')
            return JSON.parse(objs)
        } catch (error) {
            console.log("ruta error",this.ruta) 
            return []
        }
    }

    async guardar(obj) {
        const objs = await this.listarAll();
        const newObj = { ...obj}
        objs.push(newObj)
        try {
            await fs.promises.writeFile(this.ruta, JSON.stringify(objs, null, 2))
            return newObj
        } catch (error) {
            throw new Error(`Error al guardar: ${error}`)
        }
    }

    async actualizar(elem) {
        const objs = await this.listarAll()
        const index = objs.findIndex(o => o.title == elem.title)
        if (index == -1) {
            throw new Error(`Error al actualizar: no se encontró el Producto ${title}`)
        } else {
            objs[index] = elem
            try {
                await fs.promises.writeFile(this.ruta, JSON.stringify(objs, null, 2))
            } catch (error) {
                throw new Error(`Error al actualizar: ${error}`)
            }
        }
    }

    async borrar(dni) {
        const objs = await this.listarAll()
        const index = objs.findIndex(o => o.dni == dni)
        if (index == -1) {
            throw new Error(`Error al borrar: no se encontró el id ${id}`)
        }

        objs.splice(index, 1)
        try {
            await fs.promises.writeFile(this.ruta, JSON.stringify(objs, null, 2))
        } catch (error) {
            throw new Error(`Error al borrar: ${error}`)
        }
    }

    async borrarAll() {
        try {
            await fs.promises.writeFile(this.ruta, JSON.stringify([], null, 2))
        } catch (error) {
            throw new Error(`Error al borrar todo: ${error}`)
        }
    }
    static getInstanceProducto() {
        if (!instanceProducto) {
            instanceProducto = new ProductosDAOFile();
        }
        return instanceProducto;
      }
}

module.exports = ProductosDAOFile;