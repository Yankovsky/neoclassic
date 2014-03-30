var passport = require('passport'),
  LocalStrategy = require('passport-local').Strategy,
  usersRepo = require('./../db/repositories/users-repo'),
  cryptoSvc = require('./../utils/crypto-svc')

passport.serializeUser(function(user, done) {
  console.log("SERIALIZE")

  done(null, user.id)
})

passport.deserializeUser(function(id, done) {
  console.log("DESERIALIZE")

  usersRepo.getPublicDataById(id, function(err, user) {
    console.log('======================')
  console.log(err, user)

    done(err, user)
  })
})

// add other strategies for more authentication flexibility
passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
  },
  function(email, password, done) {
    usersRepo.getPrivateDataByEmail(email, function(err, user) {
      if (err) return done(err)
      if (!user) return done(null, false, { message: 'This email is not registered.' })
      console.log(password, user.salt, cryptoSvc.encryptPassword(password, user.salt))
      
      if (cryptoSvc.encryptPassword(password, user.salt) !== user.hashed_password)
        return done(null, false, { message: 'This password is not correct.' })
      return done(null, user)
    })
  }
))

module.exports = passport