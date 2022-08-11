const express = require("express");
const router = express.Router();

const auth = require("./auth");

class AuthAPI {
    constructor(app) {
        router.post("/login", auth.postLogin);
        router.get("/login", auth.getLogin);
        router.get("/register", auth.getRegister);
        router.get("/forgotPass", auth.getForgotPass);
        router.get("/resetPass", auth.getResetPass);
        router.post("/logout", auth.postLogout);

        app.use("/api/auth", router)
    }
}

module.exports = AuthAPI;