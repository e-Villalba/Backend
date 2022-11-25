const {options} = require("../options/sqliteDB")
const knex =require("knex")(options)

knex.schema.createTable("mensajes",(table)=>{
    table.increments("id")
    table.string("email")
    table.timestamp("fecha")
    table.string("mensaje")

}).then(()=>{
    console.log("Tabla Mensajes creada")
}).catch((err)=>{
    console.log(err)
}).finally(()=>{
    knex.destroy()
})
