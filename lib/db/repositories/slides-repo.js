var db = require('./../db')

exports.create = function(slide, callback) {
  db.query({
    name: 'create_slide',
    text: '' +
      'INSERT INTO slides (text, image_url, url, position)' +
      ' SELECT $1, $2, $3, COALESCE(MAX(position) + 1, 0) FROM slides' +
      ' RETURNING id',
    values: [slide.text, slide.imageUrl, slide.url]
  }, callback)
}

exports.all = function(callback) {
  db.query({
    name: 'get_all_slides',
    text: 'SELECT * FROM slides ORDER BY position'
  }, callback)
}