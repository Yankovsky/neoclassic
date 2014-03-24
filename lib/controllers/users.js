var mongoose = require('mongoose'),
  User = mongoose.model('User')

exports.changePassword = function(req, res, next) {
  if (!req.user)
    res.send(401)
  var userId = req.user._id
  var newPass = String(req.body.newPassword)
  User.findById(userId, function(err, user) {
    user.password = newPass
    user.save(function(err) {
      if (err) return res.send(400)

      res.send(200)
    })
  })
}