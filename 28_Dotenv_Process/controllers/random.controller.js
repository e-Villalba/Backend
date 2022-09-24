
const getRandoms = (x) => {

    function random(min, max) {
        return Math.floor(Math.random() * ((max + 1) - min) + min); //https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    }



    // En este Array se guardan los objetos que tienen los nros random y la cantidad de apariciones
  
    let vecNrosRandom = []
  
    console.log("x", x)
    //console.log("nroRandom", nroRandom)
    //console.log("vecNrosRandom[nroRandom]", vecNrosRandom[nroRandom])
    /*for (let i = 1; i <= x; i++) {
        let nroRandom = random(1, 1000);
        if (vecNrosRandom[nroRandom]) {
            vecNrosRandom[nroRandom].apariciones++;
        }
        else {
            vecNrosRandom.splice(nroRandom,0, { numero: nroRandom, apariciones: 1 });
        }
    }*/
    // Se inicializa el array con los nros de 1 a 1000 y los apariciones en 0
    for (let index = 1; index <= 1000; index++) {
        vecNrosRandom.push({ valor: index, apariciones: 0 });
    }
  
    // saco aleatorios x cantidad de veces
    for (let i = 1; i <= x; i++) {
      // obtengo el aleatorio entre 1 y 1000
      let nroRandom = random(1, 1000);
      // incremento las apariciones de este valor
      vecNrosRandom[nroRandom].apariciones++;
      ;
    }    
    
    return vecNrosRandom

}

process.on("message", (msg) => {
    if (msg[0] == "start") {
        const randoms = getRandoms(msg[1]);
        process.send(randoms);
    }
});
