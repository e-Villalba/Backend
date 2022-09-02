import {
    productosDao as prodDao,
    carritosDao as cartDao
} from "./dao/index.js"

CRUD();
async function CRUD(){
try
{
//////////////////////////////////////////////////////// PRODUCTO  ///////////////////////////////////////////////////////////////////////
    const DataProd={
        nombre:"Prod 1",
        descripcion: "Descrip 1",
        codigo: "1",
        foto: "Foto 1",
        precio: 1.20      
    }
    const DataProdUpdate={
        nombre:"Prod 1",
        descripcion: "NEW Descrip 1",
        codigo: "1",
        foto: "Foto NEw 1",
        precio: 2.20      
    };

    prodDao.listarTodos()
    .then(producto => console.log(producto))
    .catch(err => console.log(err));

 /*
    prodDao.buscarPorCodigo('1')
    .then(producto => console.log(producto))
    .catch(err => console.log(err));

    prodDao.crear(DataProd)
    .then(producto=>console.log("ID Producto creado",producto.codigo))
    .catch(err=>console.log(err))

    prodDao.actualizar("1",DataProdUpdate)
    .then(producto=>console.log("Producto Modificado",producto))
    .catch(err=>console.log(err));

    prodDao.eliminar ("1")
    .then(producto=>console.log("Producto Eliminado",producto))
    .catch(err=>console.log(err));*/
//////////////////////////////////////////////////////// CARRITO  ///////////////////////////////////////////////////////////////////////
    /*const DataCart={
        codigo: "1",
        timestamp: "Descrip Cart ",
        productos:[2,4,5]
    };
    const DataCartUpdate={
        codigo: "1",
        timestamp: "Descrip UPDATED 1",
        productos:[7,8,9]
    };    

    
    cartDao.buscarPorCodigo('1')
    .then(carrito => console.log(carrito))
    .catch(err => console.log(err));

    cartDao.crear(DataCart)
    .then(carrito=>console.log("ID Producto creado",carrito.codigo))
    .catch(err=>console.log(err))

    cartDao.actualizar("1",DataCartUpdate)
    .then(carrito=>console.log("Producto Modificado",carrito))
    .catch(err=>console.log(err));

    cartDao.eliminar ("1")
    .then(carrito=>console.log("Producto Eliminado",carrito))
    .catch(err=>console.log(err));
*/
}catch(err)
{
    console.log(err);

}
}

