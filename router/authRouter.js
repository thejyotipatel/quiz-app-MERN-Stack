const passport = require('passport')

const express = require('express')
const authRouter = express.Router()
const { registerUser, loginUser } = require('../controllers/authController')

authRouter.post('/register', registerUser)
authRouter.post('/login', loginUser)

authRouter.get('/login/failure', (req, res) => {
  res.status(401).json({
    succes: false,
    message: 'login failure',
  })
})

authRouter.get('/user', (req, res) => {
  res.status(401).json({
    succes: true,
    message: 'login success',
    user: req.user,
  })
})

authRouter.get('/logout', (req, res) => {
  req.logOut()
  res.redirect('http://localhost:3000/')
})
// authRouter.get('/google', passport.authenticate('google', { scope: ['profile'] }))

authRouter.get(
  '/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
)

authRouter.get(
  '/google/callback',
  passport.authenticate('google', {
    successRedirect: 'http://localhost:3000/',
    failureRedirect: '/login/failure',
  })
)

module.exports = authRouter
