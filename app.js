const express = require("express");
const path = require("path");
const session = require("express-session");

const app = express();

/*The server can use gzip compression to reduce file sizes
before sending them to a web browser. 
This will reduce latency and lag.*/
const compression = require("compression");

const bodyParser = require("body-parser");

const errorController = require("./app/components/error/error");

const PORT = process.env.PORT || 3000;

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
  app.set("trust proxy", 1); // trust first proxy
  app.use(
    session({
      secret: "keyboard cat",
      resave: false,
      saveUninitialized: true,
      cookie: { secure: true },
    })
  );

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

// This section is commented these are just for optioning:

/*********************************************************************************
For using secure cookies in production, but allowing for testing in development, *
the following is an example of enabling this setup based on NODE_ENV in express: *
                                                                                 *
const sess = {                                                                   *
  secret: 'keyboard cat',                                                        *
  cookie: {}                                                                     *
}                                                                                *  
                                                                                 *
if (app.get('env') === 'production') {                                           *
  app.set('trust proxy', 1) // trust first proxy                                 *
  sess.cookie.secure = true // serve secure cookies                              *
}                                                                                *
                                                                                 *
app.use(session(sess))                                                           *
**********************************************************************************/
