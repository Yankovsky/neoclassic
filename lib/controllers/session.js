var passport = require('passport')

exports.logout = function(req, res) {
  req.logout()
  res.send(200)
}

exports.login = function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    var error = err || info
    if (error) return res.send(401, error)

    req.logIn(user, function(err) {
      if (err) return res.send(err)
      console.log('PALIMSYA userInfo')
      res.send(req.user)
    })
  })(req, res, next)
}