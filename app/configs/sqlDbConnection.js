const config = require("./sqlDbConfig");
const  mssql = require('mssql');

class SQLDbConnection {
  async getConnection() {
     try {
       return await mssql.connect(config.development);
    }
    catch(error) {
      console.log("Error happend in sqldbconnection.js: ",error);
    }
  }
}
module.exports = new SQLDbConnection();