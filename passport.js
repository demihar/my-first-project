const GoogleStrategy = require("passport-google-oauth20").Strategy;

const passport = require("passport");


passport.use(
  new GoogleStrategy(
    {
      clientID: "895151154354-fdag95ondhdd7m3pqentindgt1utve1c.apps.googleusercontent.com",
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