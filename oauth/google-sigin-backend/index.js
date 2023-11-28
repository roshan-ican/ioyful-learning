const express = require("express");
require("./auth");
const passport = require("passport");

const app = express();

app.get("/", (req, res) => {
  res.send('<a href="/auth/google">Authenticate with Google</a>');
});

app.get("/protected", (req, res) => {
  res.send("Hello!");
});

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

app.listen(5000, () => console.log("Listening on: 5000"));
