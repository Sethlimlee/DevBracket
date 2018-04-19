require("dotenv").config();
const bodyParser = require("body-parser");
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

app.use( express.static( `${__dirname}/../build` ) );


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
            .create_user([profile.id, profile.displayName, profile.picture])
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
    .then(loggedInUser => {
      done(null, loggedInUser[0]);
    });
});

app.get("/login", passport.authenticate("auth0"));
app.get(
  "/login/callback",
  passport.authenticate("auth0", {
    successRedirect: process.env.SUCCESS_REDIRECT,
    failureRedirect: process.env.FAILURE_REDIRECT
  })
);

app.get("/login/me", function(req, res) {
  if (req.user) {
    res.status(200).send(req.user);
  } else {
    res.status(401).send("nice try suckaaa");
  }
});

app.get("/api/team/:team_name", c.getTeam);

app.get("/login/logout", (req, res) => {
  req.logOut();
  res.redirect(process.env.REDIRECT);
});

app.get("/api/bracket/:bracketid", c.getBracket);
app.get("/api/findBracket/:bracketid", c.findBracket);
app.get("/api/bracketid", c.getBracketID);
app.get("/api/allBracketIds", c.getAllBracketIDs);
app.get("/api/rankings", c.rankings);
app.get("/api/rankingsfoos", c.rankingsfoos);
app.post("/api/addPlayer1", c.winner);
app.post("/api/addPlayer2", c.winner2);
app.post("/api/bracketSize2", c.createBracket2);
app.post("/api/bracketSize4", c.createBracket4);
app.post("/api/bracketSize8", c.createBracket8);
app.post("/api/bracketSize16", c.createBracket16);
app.post("/api/addWin", c.addWin);
app.post("/api/joinbracket", c.joinBracket);
app.post("/api/joinbracket2", c.joinBracket2);
app.post("/api/button", c.button);
app.delete("/api/deleteBracket/:bracketid", c.deleteBracket)
app.put("/api/updateProfile/:id", c.updateUser)
app.get('/api/userbrackets', c.userBrackets)
app.put('/api/complete/:bracketid', c.completeBracket)



app.listen(SERVER_PORT, () =>
  console.log(chalk.cyan(`POWER LEVEL OVER ${SERVER_PORT}!!!!!!!`))
);
