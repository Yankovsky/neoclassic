var crypto = require('crypto')

exports.makeSalt = function() {
  return crypto.randomBytes(16).toString('base64')
}
exports.encryptPassword = function(password, salt) {
  if (!password || !salt) return ''
  return crypto.pbkdf2Sync(password, new Buffer(salt, 'base64'), 10000, 64).toString('base64')
}
exports.getHashAndSalt = function(password) {
  var salt = this.makeSalt()
  return {
    salt: salt,
    hash: this.encryptPassword(password, salt)
  }
}