function getNumbers() {
    let numeros = [];
    for (let i = 0; i < 10000; i++) {
        numeros.push(Math.floor(Math.random() * (20) + 1));
    }
    const resultado = numeros.reduce((prev, cur) => ((prev[cur] = prev[cur] + 1 || 1), prev), {})
    console.log(resultado);
    return resultado
}

getNumbers();


const productos = [
    { id:1, nombre:'Escuadra', precio:323.45 },
    { id:2, nombre:'Calculadora', precio:234.56 },
    { id:3, nombre:'Globo Terráqueo', precio:45.67 },
    { id:4, nombre:'Paleta Pintura', precio:456.78 },
    { id:5, nombre:'Reloj', precio:67.89 },
    { id:6, nombre:'Agenda', precio:78.90 }
]

let pTotal; let pProm; let pMenor; let pMayor; let resultado = {};

productos.forEach(x=>{
    pTotal = x.precio;
    pMayor = !pMayor || x.precio > pMayor ? x.precio : pMayor;
    pMenor = !pMenor || pMenor > x.precio ? x.precio : pMenor;
})

resultado.promedio = pTotal / productos.length;
resultado.total = pTotal;
resultado.mayor = pMayor;
resultado.menor = pMenor;

console.log(resultado);
