const GoogleStrategy = require("passport-google-oauth20").Strategy;
require('dotenv').config()
const passport = require("passport");


passport.use(
  new GoogleStrategy(
    {
      clientID: `${process.env.CLIENT_ID}`,
      clientSecret: "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",
      callbackURL: "/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
        console.log(profile)
      done(null, profile);
    }
  )
);


passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});