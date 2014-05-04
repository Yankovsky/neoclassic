var videos = require('./controllers/videos'),
  slides = require('./controllers/slides'),
  index = require('./controllers'),
  entries = require('./controllers/entries'),
  replies = require('./controllers/replies'),
  users = require('./controllers/users'),
  session = require('./controllers/session')

var middleware = require('./middleware')

module.exports = function(app) {
  // Server API Routes
  app.get('/api/slides', slides.all)

  app.post('/api/videos', middleware.auth, videos.create)
  app.get('/api/videos', videos.all)
  app.put('/api/videos/:id', middleware.auth, videos.move)
  app.delete('/api/videos/:id', middleware.auth, videos.remove)

  app.post('/api/replies', replies.create)
  app.get('/api/replies', replies.all)

  app.put('/api/changePassword', middleware.auth, users.changePassword)

  app.post('/api/session', session.login)
  app.del('/api/session', middleware.auth, session.logout)

  app.post('/api/:type', middleware.auth, entries.create)
  app.get('/api/:type/:urlSlug', entries.get)
  app.put('/api/:type/:urlSlug', middleware.auth, entries.update)

  // All undefined api routes should return a 404
  app.get('/api/*', function(req, res) {
    res.send(404)
  })

  // All other routes to use Angular routing in app/scripts/app.js
  app.get('/partials/*', index.partials)
  app.get('/*', middleware.setUserCookie, index.index)
}