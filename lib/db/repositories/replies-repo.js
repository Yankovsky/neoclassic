var db = require('./../db')

exports.create = function(reply, callback) {
  db.single({
    name: 'create_reply',
    text: 'INSERT INTO replies (name, email, text) VALUES ($1, $2, $3)',
    values: [reply.name, reply.email, reply.text]
  }, callback)
}

exports.all = function(callback) {
  db.query({
    name: 'get_all_replies',
    text: 'SELECT name, text, created_at AS "createdAt" FROM replies ORDER BY created_at DESC'
  }, callback)
}