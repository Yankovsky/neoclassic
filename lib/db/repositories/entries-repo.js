var db = require('./../db')

exports.create = function(entry, callback) {
  db.single({
    name: 'create_entry',
    text: 'INSERT INTO entries (slug, title, html, short_text, datetime, thumbnail_url, type) VALUES ($1, $2, $3, $4, $5, $6, $7)',
    values: [entry.slug, entry.title, entry.html, entry.shortText, entry.datetime, entry.thumbnailUrl, entry.type]
  }, callback)
}

exports.allOfType = function(type, callback) {
  db.query({
    name: 'get_all_entries',
    text: 'SELECT id, slug, title, html, short_text AS "shortText", datetime, thumbnail_url AS "thumbnailUrl", type FROM entries ' +
      'WHERE type = $1 ORDER BY datetime DESC',
    values: [type]
  }, callback)
}

exports.get = function(id, callback) {
  db.single({
    name: 'get_entry_by_id',
    text: 'SELECT id, slug, title, html, short_text AS "shortText", datetime, thumbnail_url AS "thumbnailUrl", type FROM entries WHERE id = $1',
    values: [id]
  }, callback)
}

exports.getByTypeAndSlug = function(type, slug, callback) {
  db.single({
    name: 'get_entry_by_type_and_slug',
    text: 'SELECT id, slug, title, html, short_text AS "shortText", datetime, thumbnail_url AS "thumbnailUrl", type FROM entries WHERE type = $1 AND slug = $2',
    values: [type, slug]
  }, callback)
}

exports.update = function(id, entry, callback) {
  db.single({
    name: 'update_entry',
    text: 'UPDATE entries SET slug = $2, title = $3, html = $4, short_text = $5, datetime = $6, thumbnail_url = $7, type = $8 WHERE id = $1',
    values: [id, entry.slug, entry.title, entry.html, entry.shortText, entry.datetime, entry.thumbnailUrl, entry.type]
  }, callback)
}

exports.remove = function(id, callback) {
  db.single({
    name: 'delete_entry',
    text: 'DELETE FROM entries WHERE id = $1',
    values: [id]
  }, callback)
}