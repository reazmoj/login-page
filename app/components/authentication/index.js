class Authentication {
  constructor(app) {
    this.app = app;
  }

  authInit() {
    const AuthAPI = require("./authAPI");
    new AuthAPI(this.app);
  }
}

module.exports = Authentication;
