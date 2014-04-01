var db = require('./../db'),
  cryptoSvc = require('./../../utils/crypto-svc')

exports.create = function(user, callback) {
  var hashSalt = cryptoSvc.getHashAndSalt(user.password)
  db.query({
    name: 'create_user',
    text: 'INSERT INTO users (email, provider, hashed_password, salt) VALUES ($1, $2, $3, $4)',
    values: [user.email, user.provider, hashSalt.hash, hashSalt.salt]
  }, callback)
}

exports.getPrivateDataByEmail = function(email, callback) {
  db.single({
    name: 'get_private_user_data_by_email',
    text: 'SELECT * FROM users WHERE LOWER(email) = LOWER($1)',
    values: [email]
  }, callback)
}

exports.getPublicDataById = function(id, callback) {
  db.single({
    name: 'get_public_user_data_by_id',
    text: 'SELECT id, email, provider FROM users WHERE id = $1', // don't ever give out the password or salt
    values: [id]
  }, callback)
}

exports.changePassword = function(id, newPassword, callback) {
  console.log(id, newPassword)

  var hashSalt = cryptoSvc.getHashAndSalt(newPassword)
  db.query({
    name: 'change_user_password',
    text: 'UPDATE users SET hashed_password = $1, salt = $2 WHERE id = $3',
    values: [hashSalt.hash, hashSalt.salt, id]
  }, callback)
}