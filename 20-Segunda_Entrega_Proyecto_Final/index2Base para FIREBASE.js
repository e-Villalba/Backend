import admin from "firebase-admin"

import serviceAccount from "./dbFirebase/ecommerce-d052c-firebase-adminsdk-i5ewh-0f0f3df311.json" assert {type: "json"};

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://url-example.firebaseio.com",
});

console.log("Base de datos conectada");

CRUD();

async function CRUD() {
  const db = admin.firestore();
  const query = db.collection("productos");

   try {
  //   /* CREATE */
    const productData={
    nombre:"Prod 1",
    descripcion: "Descrip 1",
    codigo: "4"
    
}
     let doc = query.doc();
     await doc.create(productData);

     console.log("Producto creado");
   } catch (error) {
     console.log(error);
   }

  /* READ */
   query
     .get()
     .then((snapshot) => {
       snapshot.forEach((doc) => {
         console.log(doc.id, "=>", doc.data());
       });
     })
     .catch((err) => {
       console.log("Error getting documents", err);
     });

  /* UPDATE */
  // query
  //   .where("dni", "==", "1111111")
  //   .get()
  //   .then((snapshot) => {
  //     snapshot.forEach((doc) => {
  //       doc.ref.update({ nombre: "Juanito" });
  //     });
  //   })
  //   .catch((err) => {
  //     console.log("Error getting documents", err);
  //   });

  /* DELETE */
  // query
  //   .where("dni", "==", "1111111")
  //   .get()
  //   .then((snapshot) => {
  //     snapshot.forEach((doc) => {
  //       doc.ref.delete();
  //     });
  //   });
}
