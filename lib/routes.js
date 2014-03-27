var api = require('./controllers/api'),
  index = require('./controllers'),
  users = require('./controllers/users'),
  session = require('./controllers/session')

var middleware = require('./middleware')

module.exports = function(app) {
  // Server API Routes
  app.get('/api/slides', api.slides)
  app.get('/api/videos', api.videos)

  app.put('/api/changePassword', users.changePassword)

  app.post('/api/session', session.login)
  app.del('/api/session', session.logout)

  // All undefined api routes should return a 404
  app.get('/api/*', function(req, res) {
    res.send(404)
  })

  // All other routes to use Angular routing in app/scripts/app.js
  app.get('/partials/*', index.partials)
  app.get('/*', middleware.setUserCookie, index.index)
}