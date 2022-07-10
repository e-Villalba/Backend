const assert = require("assert");
let arrayProducto=[{"title":"Producto 1","price":1.1,"thumbnail":"http:/imagenProducto1","id":5},{"title":"Producto 2","price":2.2,"thumbnail":"http:/imagenProducto2","id":2},{"title":"Producto 3","price":2.3,"thumbnail":"http:/imagenProducto3","id":3}]
//let arrayProducto=[]
//const maxId = arrayProducto.reduce( (max, produc) => (produc.id > max ? produc.id : max))

let idProduc=0
arrayProducto.length?  idProduc = arrayProducto.map(produc => produc.id).sort((a, b) => b-a)[0]:idProduc=1

console.log(idProduc)

//const sorted = ids.sort((a, b) => a - b);assert(sorted === 444);
