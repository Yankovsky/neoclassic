module.exports = {
  auth: function(req, res, next) {
    if (req.isAuthenticated()) return next()
    if (req.xhr) return res.send(401)
    return res.redirect('/admin/login')
  },
  setUserCookie: function(req, res, next) {
    if (req.user) {
      console.log('PALIMSYA OPYAT userInfo')

      res.cookie('user', JSON.stringify(req.user))
    }
    next()
  }
}