const { faker } = require('@faker-js/faker')
faker.locale = 'es'

function generar() {
    return {  
        title: faker.commerce.productName(),
        price: 10,
        thumbnail: faker.image.imageUrl()
    }
       /*return {
        title: "Artesanal Acero Queso 102",
        price: 10,
        thumbnail: "https://loremflickr.com/640/480"
      }*/
}

module.exports=generar