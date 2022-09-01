import admin from "firebase-admin"
import serviceAccount from "../dbFirebase/ecommerce-d052c-firebase-adminsdk-i5ewh-0f0f3df311.json" assert {type: "json"};
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://url-example.firebaseio.com",
});

class contenedorFirebase {
  constructor(opcionCollection) {
   
    this.db = admin.firestore()
    if(opcionCollection=="Producto")
    {       
      this.query = this.db.collection("productos")
    }
    else
    {
      this.query = this.db.collection("carrito")
    }
    
    console.log("Conectado a Firebaseeee efv")
  }

   async listarTodos() {
    try {
      const result = [];
      const snapshot = await this.query.get();
      snapshot.forEach((doc) => {
        result.push({ id: doc.id, ...doc.data() });
      });
      return result;
    } catch (error) {
      throw new Error(`Error al listar todo: ${error}`);
    }
  }
  async buscarPorCodigo(criteria) {
    try {
      const result = [];
      const snapshot = await this.query.where("codigo","==",criteria).get();
      snapshot.forEach((doc) => {
        result.push({ id: doc.id, ...doc.data() });
      });
      return result;
    } catch (error) {
      throw new Error(`Error al buscar uno: ${error}`);
    }


  }
  async crear(element) {
    try {
      const doc = this.query.doc();
      console.log("elemento creado");
      return await doc.create(element);
    }
    catch (error) {
      throw new Error(`Error al Crear Elemento: ${error}`);
    }

  }

  async actualizar(criteria, element) {
    try {
      const result = [];
      const snapshot = await this.query.where("codigo", "==", criteria).get()
      snapshot.forEach((doc) => {
        doc.ref.update({ descripcion: element.descripcion });
        result.push({ id: doc.id, ...doc.data() });
      });
      return result;
    }
    catch (error) {
      throw new Error(`Error al realizar update: ${error}`);
    }
  }

  async eliminar(criteria) {
    try {
      const result = [];
      const snapshot = await this.query.where("codigo", "==", criteria).get()
      snapshot.forEach((doc) => {
        doc.ref.delete();
        result.push({ id: doc.id, ...doc.data() });
      });
      return result;
    }
    catch (error) {
      throw new Error(`Error al realizar delete: ${error}`);
    }

  }


  }

export default contenedorFirebase;