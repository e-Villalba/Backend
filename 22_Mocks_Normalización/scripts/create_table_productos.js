const {optionsMariaDB} = require("../options/mariaDB")
const knex =require("knex")(optionsMariaDB)

knex.schema.createTable("productos",(table)=>{
    table.increments("id")
    table.string("title")
    table.decimal("price")
    table.string("thumbnail")
}).then(()=>{
    console.log("Table Productos creada")
}).catch((err)=>{
    console.log(err)
}).finally(()=>{
    knex.destroy()
})

