var videos = require('./controllers/videos'),
  slides = require('./controllers/slides'),
  index = require('./controllers'),
  pages = require('./controllers/pages'),
  news = require('./controllers/news'),
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

  app.put('/api/seo/:path*', middleware.auth, seo.createOrUpdate)
  app.get('/api/seo', seo.all)
  app.get('/api/seo/id/:id', seo.get)
  app.get('/api/seo/:path*', seo.getByPath)
  app.delete('/api/seo/:id', middleware.auth, seo.remove)

  app.post('/api/pages', middleware.auth, pages.create)
  app.get('/api/pages', pages.all)
  app.get('/api/pages/id/:id', pages.get)
  app.get('/api/pages/:slug', pages.getBySlug)
  app.put('/api/pages/:id', middleware.auth, pages.update)
  app.delete('/api/pages/:id', middleware.auth, pages.remove)

  app.post('/api/news', middleware.auth, news.create)
  app.get('/api/news', news.all)
  app.get('/api/news/id/:id', news.get)
  app.get('/api/news/:slug', news.getBySlug)
  app.put('/api/news/:id', middleware.auth, news.update)
  app.delete('/api/news/:id', middleware.auth, news.remove)

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