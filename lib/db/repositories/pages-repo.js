var db = require('./../db')

exports.create = function(page, callback) {
  db.single({
    name: 'create_page',
    text: 'INSERT INTO pages (slug, html) VALUES ($1, $2)',
    values: [page.slug, page.html]
  }, callback)
}

exports.all = function(callback) {
  db.query({
    name: 'get_all_pages',
    text: 'SELECT slug, html FROM pages'
  }, callback)
}

exports.get = function(id, callback) {
  db.single({
    name: 'get_page_by_id',
    text: 'SELECT slug, html FROM pages WHERE id = $1',
    values: [id]
  }, callback)
}

exports.getBySlug = function(slug, callback) {
  db.single({
    name: 'get_page_by_slug',
    text: 'SELECT id, slug, html FROM pages WHERE slug = $1',
    values: [slug]
  }, callback)
}

exports.update = function(id, page, callback) {
  db.single({
    name: 'update_page',
    text: 'UPDATE pages SET slug = $2, html = $3 WHERE id = $1',
    values: [id, page.slug, page.html]
  }, callback)
}

exports.remove = function(id, page, callback) {
  db.single({
    name: 'update_page',
    text: 'UPDATE pages SET slug = $2, html = $3 WHERE id = $1',
    values: [id, page.slug, page.html]
  }, callback)
}