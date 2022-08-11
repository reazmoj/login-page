class Components {
  constructor(app) {
    this.app = app;
  }

  init() {
    const Authentication = require("./authentication/index");
    const authentication = new Authentication(this.app);
    authentication.authInit();


    // const userComponent = require("./user-component/index");
    // const userComponent = new productComponent(app);
    // userComponent.userInit();
  }
}

module.exports = Components;
