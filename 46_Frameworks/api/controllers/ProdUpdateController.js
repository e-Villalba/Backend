module.exports = {  
    produpdatePOST: function(req,res){
        console.log("produpdatePOST")
        const data = req.body;
        console.log("Data dle post",data)
        console.log("Data.title",data.title)
        if (data)
        {
            console.log("productos update iegue")            
            res.view('pages/productosupdate', {
                //mensajeResult: `Producto  ${title} agregado exitosamente`
                data: data
            });
        }
      
    },
};
