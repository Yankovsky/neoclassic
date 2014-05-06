var db = require('./../db')

exports.create = function(news, callback) {
  db.single({
    name: 'create_news',
    text: 'INSERT INTO news (slug, html, title, short_text, datetime) VALUES ($1, $2, $3, $4, $5)',
    values: [news.slug, news.html, news.title, news.shortText, news.datetime]
  }, callback)
}

exports.all = function(callback) {
  db.query({
    name: 'get_all_news',
    text: 'SELECT slug, html, title, short_text AS "shortText", datetime FROM news'
  }, callback)
}

exports.get = function(id, callback) {
  db.single({
    name: 'get_news_by_id',
    text: 'SELECT slug, html, title, short_text AS "shortText", datetime FROM news WHERE id = $1',
    values: [id]
  }, callback)
}

exports.getBySlug = function(slug, callback) {
  db.single({
    name: 'get_news_by_slug',
    text: 'SELECT id, slug, html, title, short_text AS "shortText", datetime FROM news WHERE slug = $1',
    values: [slug]
  }, callback)
}

exports.update = function(id, news, callback) {
  db.single({
    name: 'update_news',
    text: 'UPDATE news SET slug = $2, html = $3, title = $4, short_text = $5, datetime = $6 WHERE id = $1',
    values: [id, news.slug, news.html, news.title, news.shortText, news.datetime]
  }, callback)
}

exports.remove = function(id, callback) {
  db.single({
    name: 'delete_news',
    text: 'DELETE FROM news WHERE id = $1',
    values: [id]
  }, callback)
}