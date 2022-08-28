import admin from "firebase-admin"
import serviceAccount from "../dbFirebase/ecommerce-d052c-firebase-adminsdk-i5ewh-0f0f3df311.json" assert {type: "json"};


class contenedorProductosFirebase{
    constructor(){
        admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: "https://url-example.firebaseio.com",
          });
        this.db = admin.firestore()
        this.query = this.db.collection("productos")
        console.log("Conectado a Firebase")        
    }

    async listarTodos()
    {                
      /* READ */
      let prods=[]
      this.query
        .get()
        .then((snapshot) => {          
          snapshot.forEach((doc) => {
            prods.push(doc.data())
            //console.log(doc.id, "=>", doc.data());            
          }          
          )
          //console.log(prods)
          return prods        
        }
        
        )
        .catch((err) => {
          console.log("Error getting documents", err);
        });
        
    }
    async buscarPorCodigo(criteria)    
    {        
        return await Producto.find({codigo:criteria})
        
    }
    async crear(prod)    
    {        
 
        const newProduct = new Producto(prod)
        return await newProduct.save()
    }

    async actualizar(criteria,prod)
    {
        return await Producto.updateOne( {codigo: criteria }, {
            $set: {descripcion: prod.descripcion}
            });
    }

    async eliminar(criteria)
    {
        return await Producto.deleteOne( {codigo: criteria }) 
            
    }

}

export default contenedorProductosFirebase;