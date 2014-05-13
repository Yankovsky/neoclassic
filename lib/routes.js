var videos = require('./controllers/videos'),
  slides = require('./controllers/slides'),
  index = require('./controllers'),
  entries = require('./controllers/entries'),
  seo = require('./controllers/seo'),
  replies = require('./controllers/replies'),
  users = require('./controllers/users'),
  session = require('./controllers/session'),
  middleware = require('./middleware')

module.exports = function(app) {
  // Server API Routes
  app.get('/api/slides', slides.all)

  app.post('/api/videos', middleware.auth, videos.create)
  app.get('/api/videos', videos.all)
  app.post('/api/videos/:id', middleware.auth, videos.move)
  app.delete('/api/videos/:id', middleware.auth, videos.remove)
//
//  app.post('/api/replies', replies.create)
//  app.get('/api/replies', replies.all)

  app.put('/api/changePassword', middleware.auth, users.changePassword)

  app.post('/api/session', session.login)
  app.del('/api/session', middleware.auth, session.logout)

  app.put('/api/seo/*', middleware.auth, seo.createOrUpdate)
  app.get('/api/seo', seo.all)
  app.get('/api/seo/id/:id', seo.get)
  app.get('/api/seo/*', seo.getByPath)
  app.delete('/api/seo/:id', middleware.auth, seo.remove)

  app.post('/api/entries/:type', middleware.auth, entries.create)
  app.get('/api/entries/:type', entries.allOfType)
  app.get('/api/entries/:type/id/:id', entries.get)
  app.get('/api/entries/:type/:slug', entries.getByTypeAndSlug)
  app.put('/api/entries/:type/:id', middleware.auth, entries.update)
  app.delete('/api/entries/:type/:id', middleware.auth, entries.remove)

  // All undefined api routes should return a 404
  app.get('/api/*', function(req, res) {
    res.send(404)
  })

  app.get('/partials/*', index.partials)
  app.get('/admin/login', middleware.setUserCookie, index.admin)
  app.get('/admin', middleware.setUserCookie, middleware.auth, index.admin)
  app.get('/admin/*', middleware.setUserCookie, middleware.auth, index.admin)
  app.get('/*', middleware.setUserCookie, index.index)
}