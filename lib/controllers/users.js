var usersRepo = require('./../db/repositories/users-repo')

exports.changePassword = function(req, res, next) {
  var id = req.user.id,
    newPassword = String(req.body.newPassword)
  usersRepo.changePassword(id, newPassword, function(err, user) {
    if (err) return res.send(400)
    res.send(200)
  })
}