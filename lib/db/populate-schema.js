var db = require('./db'),
  fs = require('fs'),
  path = require('path')

exports.populate = function(callback) {
  if (process.env.NODE_ENV !== 'development') return callback()
  fs.readFile(path.join(__dirname, 'schema.sql'), function(err, data) {
    if (err) throw err
    db.query(data.toString(), function(err, result) {
      if (err) throw err
      fs.readFile(path.join(__dirname, 'data-dump.sql'), function(err, data) {
        db.query(data.toString(), function(err, result) {
          if (err) throw err
          callback()
        })
      })
    })
  })
}