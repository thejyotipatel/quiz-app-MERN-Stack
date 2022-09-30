const GoogleStrategy = require('passport-google-oauth20').Strategy
const passport = require('passport')
const Admin = require('../model/Admin')

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: '/auth/google/callback',
    },
    async function (accessToken, refreshToken, profile, done) {
      const user = {
        name: profile._json.name,
        email: profile._json.email,
        emailVerified: profile._json.email_verified,
      }
      console.log(user)
      if (user.emailVerified) {
        const add = await Admin.create({ name: user.name, email: user.email })
        return done(null, user)
      }
    }
  )
)

passport.serializeUser(function (user, done) {
  done(null, user)
})
passport.deserializeUser(function (user, done) {
  done(null, user)
})
