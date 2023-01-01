window.addEventListener("load", (event) => {      
  const email=document.getElementById("user").value  
  const URL="/chat/"+email
    fetch(URL)
    .then((response) => response.json())
    .then((data) => listarMensajes(data));
  });

  
  function listarMensajes(data) {     
    let html=""
    if(data.length>0)  
    {
      
     html += data.map((el, index) => { 
        return(
          `<form id="divDatosPRod" action="/carrito" method="post" enctype="">
            <div class="row d-flex align-items-center">
                    <div class="col">${el.email} </div>                    
                    <div class="col">${el.fecha}</div>                    
                    <div class="col">${el.mensaje}</div>
            </div>
        </form>
        `
        )
    }).join(" ");
    }
    else
    {
          html = `<div class="row d-flex align-items-center">
           <div class="col"><h2>No Hay Mensajes Registrados para el usuario</h2></div>
        </div>`
       
    }
    document.getElementById('mensajes').innerHTML = html;
  }