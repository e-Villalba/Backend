
const getRandoms = (x) => {

    function getNroRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min); //https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    }

    // En este Array se guardan los objetos que tienen los nros random y la cantidad de apariciones
    let vecNrosRandom = []
    let vecReturn = []
    // Se inicializa el array con los nros de 1 a 1000 y los apariciones en 0
    for (let index = 1; index <= 1000; index++) {
        vecNrosRandom.push({ numero: index, repeticiones: 0 });
    }
  
    // Para la cantidad de veces indicadas por Query parametres o por defecto se obtienen los aleatorios entre 1 y 1000
    for (let i = 0; i <= x; i++) {      
      let nroRandom = getNroRandom(1, 1000);
      //console.log(nroRandom)
      //Hago nroRandom-1 porque cuando inicializo el Array vecNrosRandom en la posicion 0 se guarda el objeto correspondiente al Nro 1
      vecNrosRandom[nroRandom-1].repeticiones++;      
    }        
    //En un Vector cargo los nros que si presentaron repeticiones para no devolver los que tienen cantidad Cero (0)
    for (let index = 0; index < 1000; index++) {
        //console.log("index ret",index)
       if(vecNrosRandom[index].repeticiones>0)
       {
        vecReturn.push({ numero: vecNrosRandom[index].numero, repeticiones: vecNrosRandom[index].repeticiones });
       }
    }
    return vecReturn
}

process.on("message", (msg) => {
    if (msg[0] == "start") {
        const nrosRandoms = getRandoms(msg[1]);
        process.send(nrosRandoms);
    }
});
