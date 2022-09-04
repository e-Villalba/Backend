const options = {
    client: "sqlite3",
    connection: {     
     filename:"./db/ecommerce.db3"
    },
    useNullAsDefault: true
  };
  
module.exports = { options };
  