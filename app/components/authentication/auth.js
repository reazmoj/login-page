const User = require("../user-component/user");
const authDal = require("./authDAL");

const fotterItems = {
  item1: [
    "Meta",
    "About",
    "Blog",
    "Jobs",
    "Help",
    "API",
    "Privacy",
    "Terms",
    "Top Accounts",
    "Hashtags",
    "Locations",
    "Instagram Lite",
    "Contact Uploading & Non-Users",
  ],
  item2: ["Dance", "Food & Drink", "Home & Garden", "Music", "Visual Arts"],
};

class Auth {
  async getLogin(req, res, next) {
    try {
      res.render("auth/login", {
        path: "/login",
        pageTitle: "Instagram Login",
        data: fotterItems,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async postLogin(req, res, next) {
    try {
      const userInfo = new User(req.body.Username, req.body.Password);
      const dbResult = await authDal.getLogin(userInfo);
      if (dbResult["returnValue"] == 1) {
        return res.status(200).send({
          Success: true,
          Message: "successfully member's info added to database.",
        });
      } else {
        return res.send({
          Success: false,
          Message: "Input data is invalid or exist!",
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  async getRegister(req, res, next) {}

  async getResetPass(req, res, next) {}

  async getForgotPass(req, res, next) {}

  async postRegister(req, res, next) {}

  async postLogout(req, res, next) {}
}

module.exports = new Auth();
