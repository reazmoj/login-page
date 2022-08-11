const SQLDbConnection = require("../../configs/sqlDbConnection");

class AuthDAL {
  async getLogin(loginInfo) {
    try {
      const connection = await SQLDbConnection.getConnection();
      const result = await connection
        .request()
        .input("Username", loginInfo.username)
        .input("Password", loginInfo.password)
        .execute("save_data");
        return result
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new AuthDAL();
