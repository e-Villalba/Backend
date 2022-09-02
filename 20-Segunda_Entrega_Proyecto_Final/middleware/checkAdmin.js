const isAdmin = false

function checkAdmin(req,res,next){
console.log("isAdmin",isAdmin)
if(!isAdmin) return res.json({ error: 'No tiene Permiso de acceso' , descripcion: `No tiene permiso a la ruta ${req.originalUrl}`, code: '403'})

return next()

}

export default checkAdmin