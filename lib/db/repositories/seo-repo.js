var db = require('./../db')

exports.create = function(seo, callback) {
  db.single({
    name: 'create_seo_info',
    text: 'INSERT INTO seo (url, title, description, keywords) VALUES ($1, $2, $3, $4)',
    values: [seo.url, seo.title, seo.description, seo.keywords]
  }, callback)
}

exports.all = function(callback) {
  db.single({
    name: 'get_all_seo',
    text: 'SELECT url, title, description, keywords FROM seo'
  }, callback)
}

exports.get = function(url, callback) {
  db.single({
    name: 'get_seo_by_url',
    text: 'SELECT url, title, description, keywords FROM seo WHERE LOWER(url) = LOWER($1)',
    values: [url]
  }, callback)
}

exports.update = function(url, seo, callback) {
  db.single({
    name: 'update_seo',
    text: 'UPDATE seo SET url = $2, title = $3, description = $4, keywords = $5 WHERE LOWER(url) = LOWER($1)',
    values: [seo.url, seo.title, seo.description, seo.keywords]
  }, callback)
}

exports.remove = function(id, callback) {
  db.query({
    name: 'delete_seo',
    text: 'DELETE FROM seo WHERE id = $1',
    values: [id]
  }, callback)
}