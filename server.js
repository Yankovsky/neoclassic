var express = require('express'),
  path = require('path'),
  db = require('./lib/db/db')

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development'

// Application Config
var config = require('./lib/config/config')

db.connectionString = config.pg.uri

// Passport Configuration
var passport = require('./lib/config/passport')

var app = express()
require('./lib/config/express')(app)
require('./lib/routes')(app)

// Start server
app.listen(config.port, function() {
console.log('Express server listening on port %d in %s mode', config.port, app.get('env'))
})

// Expose app
exports = module.exports = app
