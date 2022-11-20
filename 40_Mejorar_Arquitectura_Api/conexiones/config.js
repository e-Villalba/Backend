//import dotenv from "dotenv";
require('dotenv').config()

// console.log(process.env);

const config = {
  mongodb: {
    connstr: process.env.MONGO_URL_ATLAS 
    ,
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000,
    },
  },
  filedb: {
    pathdb: "./db",
  },
  srv: {
    port: process.env.PORT,
    logger: process.env.LOG || "DEV",
    persistencia: "memoria",
  },
};
module.exports=config;
