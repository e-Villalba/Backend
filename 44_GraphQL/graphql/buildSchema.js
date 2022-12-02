//import { buildSchema } from "graphql";
const { buildSchema } = require("graphql")

const schema = buildSchema(`
  type Producto {
    _id: ID
    title: String,
    price: Float,
    thumbnail: String,
    mensajeResult: String
  }
  input ProductoInputCreate {
    title: String,
    price: Int,
    thumbnail: String,
  }
  input ProductoInputUpdate {
    _id: ID
    title: String,
    price: Int,
    thumbnail: String,
  }
  type Query {
    getProducto(_id: ID!): Producto,
    getProductos: [Producto!],
  }
  type Mutation {
    createProducto(datos: ProductoInputCreate): Producto
    updateProducto(datos: ProductoInputUpdate): Producto,
    deleteProducto(_id: ID!): Producto,
  }
`);

//export default schema;
module.exports = schema