var db = require('./../db')

exports.create = function(entry, callback) {
  db.single({
    name: 'create_entry',
    text: '' +
      'INSERT INTO entries (url_slug, title, description, keywords, html, short_text, datetime, thumbnail_url, type) ' +
      'VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)',
    values: [entry.url_slug, entry.title, entry.description, entry.keywords, entry.html, entry.short_text, entry.dateTime, entry.thumbnailUrl, entry.type]
  }, callback)
}

exports.get = function(urlSlug, type, callback) {
  db.single({
    name: 'get_entry_by_url_slug_and_type',
    text: '' +
      'SELECT url_slug AS "urlSlug", title, description, keywords, html, ' +
      'short_text AS "shortText", datetime, thumbnail_url AS "thumbnailUrl", type ' +
      'FROM entries WHERE LOWER(url_slug) = LOWER($1) AND type = $2',
    values: [urlSlug, type]
  }, callback)
}

exports.update = function(urlSlug, type, data, callback) {
  db.single({
    name: 'update_entry',
    text: '' +
      'UPDATE entries SET url_slug = $3, title = $4, description = $5, keywords = $6, ' +
      'html = $7, short_text = $8, datetime = $9, thumbnail_url = $10' +
      'WHERE LOWER(url_slug) = LOWER($1) AND type = $2',
    values: [urlSlug, type, data.urlSlug, data.title, data.description, data.keywords, data.html, data.shortText, data.datetime, data.thumbnailUrl]
  }, callback)
}