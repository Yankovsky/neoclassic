var db = require('./../db')

exports.create = function(slide, callback) {
  db.single({
    name: 'create_slide',
    text: '' +
      'INSERT INTO slides (title, html, image_url, url, button_text, slide_type, position)' +
      ' SELECT $1, $2, $3, COALESCE(MAX(position) + 1, 0) FROM slides' +
      ' RETURNING id',
    values: [slide.html, slide.imageUrl, slide.url, slide.buttonText, slide.type]
  }, callback)
}

exports.all = function(callback) {
  db.query({
    name: 'get_all_slides',
    text: 'SELECT id, title, html, image_url as "imageUrl", url, button_text as "buttonText", slide_type as "slideType", position FROM slides ORDER BY position'
  }, callback)
}
