var express = require('express'),
  path = require('path'),
  db = require('./lib/db/db'),
  populateSchema = require('./lib/db/populate-schema')

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development'

// Application Config
var config = require('./lib/config/config')

db.connectionString = config.pg.uri
populateSchema.populate(function() {
// Passport Configuration
  var passport = require('./lib/config/passport')

  var app = express()

// Express settings
  require('./lib/config/express')(app)

// Routing
  require('./lib/routes')(app)

// Start server
  app.listen(config.port, function() {
    console.log('Express server listening on port %d in %s mode', config.port, app.get('env'))
  })

// Expose app
  exports = module.exports = app
})