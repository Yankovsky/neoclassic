var usersRepo = require('./../db/repositories/users-repo')

function validate(req) {
  var errors = {}
  var id = req.user.id,
    newPassword = req.body.newPassword
  if (!id) {
    if (!errors.id)
      errors.id = []
    errors.id.push('required')
  }
  if (!newPassword) {
    if (!errors.newPassword)
      errors.newPassword = []
    errors.newPassword.push('required')
  }
  return errors
}

exports.changePassword = function(req, res) {
  var id = req.user.id,
    newPassword = req.body.newPassword
  var errors = validate(req)
  if (!_.isEmpty(errors))
    return res.send(400, errors)
  return usersRepo.changePassword(id, newPassword, function(err) {
    if (err) return res.send(500, err)
    return res.send()
  })
}