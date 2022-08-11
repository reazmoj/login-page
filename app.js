const express = require("express");
const path = require("path");

/*The server can use gzip compression to reduce file sizes
before sending them to a web browser. 
This will reduce latency and lag.*/
const compression = require("compression");
const bodyParser = require("body-parser");

const errorController = require("./app/components/error/error");

const PORT = process.env.PORT || 3000;

const app = express();

app.listen(3000, () => {
  console.log(`Server is running on port ${PORT}.`);
});

async function inint() {
  app.use(express.json());
  app.use(compression());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(express.static(path.join(__dirname, "app/public")));
  app.set("view engine", "ejs");
  app.set("views", "./app/views");

  // simple error page rout ...!!!
  

  try {
    const Components = require("./app/components/index");
    const appRouting = new Components(app);
    appRouting.init();
  } catch (error) {
    console.log("error in api's initial: ", error);
  }

  app.use(errorController.get404);
}

inint();
