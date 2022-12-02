# Entrega - Clase 44 GraphQL
![N|Solid](https://cdn0.iconfinder.com/data/icons/mobile-basic-vol-1/32/Filter-48.png)
## Desarrollo
Sobre la base de la entrega correspondiente a la clase **42-Testeamos Nuestra Api** se agregaron los conceptos correspondientes a la utilización de **GraphQL**
## GraphQL
Dentro de la Carpeta **GraphQL** en el archivo *buildSchema.js* se genera el Schema que contiene las definiciones del *Type de la Entidad Productos, Query y Mutation* a utilizar. 
## Funciones para GraphQL
Dentro de la carpeta **src\services** y en el arhcivo *index.js* se declaran las funciones correspondientes a las *Query y Mutations* definidas en el *Schema de GraphQL*.
Estas funciones reutilizan los métodos de la *Capa persistencia*.

## Server
En el archivo *Server.js* se requiere *GraphQL* y se implementa como Middleware dentro de la *app Express* indicando el Schema con sus Query y Mutations.

## Ejecución
Levantar el Server Express con *npm start o node server.js*, dirigirse a **http://localhost:3000/graphql** y ejecutar las Query y Mutations definidas. Dentro de la Carpeta **graphql** y en el archivo **queries.graphql** se dejan Query de ejemplos utilizadas para validar el correcto funcionamiento de la implementación de **GraphQL**