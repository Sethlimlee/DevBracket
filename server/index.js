require("dotenv").config();
const bodyParser = require('body-parser');
const express = require("express"),
  session = require("express-session"),
  passport = require("passport"),
  Auth0Strategy = require("passport-auth0"),
  massive = require("massive"),
  chalk = require("chalk"),
  c = require("./controller");

const {
  SERVER_PORT,
  SESSION_SECRET,
  DOMAIN,
  CLIENT_ID,
  CLIENT_SECRET,
  CALLBACK_URL,
  CONNECTION_STRING
} = process.env;

const app = express();

app.use(bodyParser.json());

massive(CONNECTION_STRING).then(db => {
  console.log(chalk.magenta("The Database has Connected!"));
  app.set("db", db);
});

app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true
  })
);

app.use(passport.initialize());
app.use(passport.session());
passport.use(
  new Auth0Strategy(
    {
      domain: DOMAIN,
      clientID: CLIENT_ID,
      clientSecret: CLIENT_SECRET,
      callbackURL: CALLBACK_URL,
      scope: "openid profile"
    },
    function(accessToken, refreshToken, extraParams, profile, done) {
      // db calls
      const db = app.get("db");
      db.find_user([profile.id]).then(userResult => {
        if (!userResult[0]) {
          db
            .create_user([profile.id, profile.displayName])
            .then(createdUser => {
              return done(null, createdUser[0].id);
            });
        } else {
          return done(null, userResult[0].id);
        }
      });
    }
  )
);

passport.serializeUser((id, done) => {
  done(null, id);
});
// runs before each endpoint is hit, after login
passport.deserializeUser((id, done) => {
  // puts info on req.user

  app
    .get("db")
    .find_session_user([id])
    .then(user => {
      console.log(user);
      
      const loggedInUser = user[0]
     app.get('db').get_users([loggedInUser.userid[0],loggedInUser.userid[1]])
      .then(res => {
        loggedInUser.userid = res
        done(null, loggedInUser);
      })
    });
});

app.get("/login", passport.authenticate("auth0"));
app.get(
  "/login/callback",
  passport.authenticate("auth0", {
    successRedirect: "http://localhost:3000/#/home",
    failureRedirect: "http://localhost:3000"
  })
);

app.get("/login/me", function(req, res) {
  if (req.user) {
    res.status(200).send(req.user);
  } else {
    res.status(401).send("nice try suckaaa");
  }
});


app.get("/login/logout", (req, res) => {
  req.logOut();
  res.redirect('http://localhost:3000/')
});

app.listen(SERVER_PORT, () =>
  console.log(chalk.cyan(`POWER LEVEL OVER ${SERVER_PORT}!!!!!!!`))
);
