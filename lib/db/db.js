pg = require('pg')

exports.connectionString = null

exports.connect = function(doStuff) {
  pg.connect(exports.connectionString, function(err, client, done) {
    if (err) throw err
    doStuff(client, done)
  })
}

exports.query = function(config, callback) {
  this.connect(function(client, done) {
    client.query(config, function(err, result) {
      done()
      callback(err, result && result.rows, result)
    })
  })
}

exports.single = function(config, callback) {
  this.query(config, function(err, rows, result) {
    if (rows.length > 1)
      throw new Error('db.single return more than one result for ' + config)
    callback(err, rows[0], result)
  })
}

exports.transaction = function() {
  throw new Error('not implemented yet')
}