module.exports = {
  auth: function(req, res, next) {
    if (req.isAuthenticated()) return next()
    res.send(401)
  },
  setUserCookie: function(req, res, next) {
    if (req.user) {
      res.cookie('user', JSON.stringify(req.user.userInfo))
    }
    next()
  }
}