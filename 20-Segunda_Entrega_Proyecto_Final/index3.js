import contenedorProductos from "./contenedores/contenedorProductosFirestore.js"
CRUD();
async function CRUD(){
try
{
    /*console.log("CREATE")
    const productData={
        nombre:"Prod 8",
        descripcion: "Descrip 8",
        codigo: "8"
        
    };
    const productDataUpdate={
        nombre:"Prod 7",
        descripcion: "NEW NEW Descrip 7",
        codigo: "7"
    };*/

    const prod = new contenedorProductos()
    prod.listarTodos()
    .then(product => console.log("Firebase Listartodos",product))
    .catch(err => console.log(err));
    /*prod.buscarPorCodigo('8')
    .then(product => console.log(product))
    .catch(err => console.log(err));

    prod.crear(productData)
    .then(product=>console.log("ID Prod creado",product.codigo))
    .catch(err=>console.log(err))

    prod.actualizar("7",productDataUpdate)
    .then(product=>console.log("Prod Modificado",product))
    .catch(err=>console.log(err));*/

    /*prod.eliminar ("6")
    .then(product=>console.log("Prod Eliminado",product))
    .catch(err=>console.log(err));*/


}catch(err)
{
    console.log(err);

}

}
