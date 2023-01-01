const twilio = require("twilio") 

const accountSid = process.env.ACCOUNTSID 
const authToken = process.env.AUTHTOKEN 

const client = twilio(accountSid, authToken);

const sendSMS = async () => {

  try {
    const message = await client.messages.create({
      body: 'Su pedido ha sido Realizado y se encuentra en Proceso. Nos pondremos en contacto para confirmar el envio. Muchas gracias!',
      from: process.env.PHONE_FROM, 
      to: process.env.PHONE_NUMBER 
    });    
  }
  catch (error) {
    console.log(error);
  }

}

module.exports = sendSMS;