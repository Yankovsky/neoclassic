var db = require('./../db')

exports.create = function(path, seo, callback) {
  db.single({
    name: 'create_seo_info',
    text: 'INSERT INTO seo (path, title, description, keywords) VALUES ($1, $2, $3, $4)',
    values: [path, seo.title, seo.description, seo.keywords]
  }, callback)
}

exports.all = function(callback) {
  db.single({
    name: 'get_all_seo',
    text: 'SELECT path, title, description, keywords FROM seo'
  }, callback)
}

exports.get = function(id, callback) {
  db.single({
    name: 'get_seo_by_id',
    text: 'SELECT path, title, description, keywords FROM seo WHERE id = $1',
    values: [id]
  }, callback)
}

exports.getByPath = function(path, callback) {
  db.single({
    name: 'get_seo_by_path',
    text: 'SELECT id, path, title, description, keywords FROM seo WHERE LOWER(path) = LOWER($1)',
    values: [path]
  }, callback)
}

exports.update = function(path, seo, callback) {
  db.single({
    name: 'update_seo',
    text: 'UPDATE seo SET title = $2, description = $3, keywords = $4 WHERE LOWER(path) = LOWER($1)',
    values: [path, seo.title, seo.description, seo.keywords]
  }, callback)
}

exports.remove = function(id, callback) {
  db.query({
    name: 'delete_seo',
    text: 'DELETE FROM seo WHERE id = $1',
    values: [id]
  }, callback)
}