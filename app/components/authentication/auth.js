const User = require("../user-component/user");
const authDal = require("./authDAL");

class Auth {
  async getLogin(req, res, next) {
    try {
      res.render("auth/login", {
        path: "/login",
        pageTitle: "Login",
      });
    } catch (error) {
      console.log(error);
    }
  }

  async postLogin(req, res, next) {
    try {
      const userInfo = new User(req.body.Username, req.body.Password);
      const dbResult = await authDal.getLogin(userInfo);
      return res.json(dbResult);
    } catch (error) {
      console.log(error);
    }
  }

  async getRegister (req, res, next) {};

  async getResetPass (req, res, next) {};

  async getForgotPass (req, res, next) {};

  async postRegister (req, res, next) {};

  async postLogout (req, res, next) {};
}


module.exports = new Auth();